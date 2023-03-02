import { LOGIN, LOGOUT } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN:
			return { ...state, ...payload };
		case LOGOUT:
			return { ...state, id: null, email: null };
		default:
			return state;
	}
};

export default reducer;
