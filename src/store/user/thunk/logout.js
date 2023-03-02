import { logout } from '../actions';
const logOutHandler = (dispatch) => {
	localStorage.removeItem('user');
	dispatch(logout());
};

export default logOutHandler;
