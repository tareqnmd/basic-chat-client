import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

const initialState = {
	userId: null,
	userName: '',
	userFullName: '',
	userEmail: '',
	userAvatarUrl: '',
	loading: false,
	error: '',
};

export const loginUser = createAsyncThunk('user/loginUser', async () => {
	const { data } = await axios.get(`${url}/login`);
	return data;
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.loading = false;
			state.userId = '';
			state.userName = '';
			state.userFullName = '';
			state.userEmail = '';
			state.userAvatarUrl = '';
			state.error = action.error.message;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export default userSlice.reducer;
