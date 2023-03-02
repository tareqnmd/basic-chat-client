import { LOGIN, LOGIN_ERROR, LOGOUT } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN:
			return { ...state, loginError: false, loggedIn: true, ...payload };
		case LOGOUT:
			return { ...initialState, loggedIn: false, loginError: false };
		case LOGIN_ERROR:
			return {
				...initialState,
				loginError: true,
			};
		default:
			return state;
	}
};

export default reducer;
