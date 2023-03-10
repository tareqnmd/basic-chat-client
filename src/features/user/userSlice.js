import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getUser from './userAPI';

const initialState = {
	user: {},
	isLoading: false,
	isError: false,
	error: '',
};

export const userLogin = createAsyncThunk('user/userLogin', async (userInfo) => {
	const { data } = getUser(userInfo);
	return data;
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(userLogin.pending, (state, action) => {
			state.user = {};
			state.isLoading = true;
			state.isError = false;
			state.error = '';
		});
		builder.addCase(userLogin.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
			state.isError = false;
			state.error = '';
		});
		builder.addCase(userLogin.rejected, (state, action) => {
			state.user = {};
			state.isLoading = false;
			state.isError = true;
			state.error = action.error.message;
		});
	},
});

export default userSlice.reducer;
