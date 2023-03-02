import { LOGIN, LOGIN_ERROR, LOGIN_ERROR_REMOVE, LOGOUT } from './actionTypes';

export const login = (payload) => {
	return {
		type: LOGIN,
		payload,
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};

export const loginError = () => {
	return {
		type: LOGIN_ERROR,
	};
};
export const loginErrorRemove = () => {
	return {
		type: LOGIN_ERROR_REMOVE,
	};
};
