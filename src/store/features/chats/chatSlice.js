import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'http://localhost:3200';

const initialState = {
	chats: [],
	loading: false,
	error: '',
};

export const fetchChats = createAsyncThunk('chat/fetchChats', async () => {
	const { data } = await axios.get(`${url}/comments`);
	return data;
});

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchChats.pending, (state, action) => {
			state.chats = [];
			state.loading = true;
			state.error = '';
		});
		builder.addCase(fetchChats.fulfilled, (state, action) => {
			state.chats = action.payload;
			state.loading = false;
			state.error = '';
		});
		builder.addCase(fetchChats.rejected, (state, action) => {
			state.chats = [];
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export default chatSlice;