import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

const initialState = {
	userId: null,
	userName: '',
	userFullName: '',
	userEmail: '',
	userAvatarUrl: '',
	error: false,
};

export const loginUser = createAsyncThunk('user/loginUser', async () => {
	const { data } = await axios.get(`${url}/login`);
	return data;
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state, action) => {});
		builder.addCase(loginUser.fulfilled, (state, action) => {});
		builder.addCase(loginUser.rejected, (state, action) => {});
	},
});

export default userSlice.reducer;
