import { LOGIN, LOGOUT } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN:
			return { ...state, loggedIn: true, ...payload };
		case LOGOUT:
			return { ...state, loggedIn: false, id: null, name: null, email: null };
		default:
			return state;
	}
};

export default reducer;
