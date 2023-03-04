import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import chatReducer from './features/chats/chatSlice';
import userReducer from './user/reducer';

const store = configureStore(
	{
		reducer: {
			user: userReducer,
			chat: chatReducer,
		},
	},
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
