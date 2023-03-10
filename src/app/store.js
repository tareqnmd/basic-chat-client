import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chats/chatsSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
	reducer: {
		user: userReducer,
		chat: chatReducer,
	},
});

export default store;
