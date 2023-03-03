import { login, logout } from '../actions';

const checkUser = async (dispatch) => {
	try {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user.email) {
			dispatch(login(user));
		} else {
			localStorage.removeItem('user');
			dispatch(logout());
		}
	} catch (err) {
		localStorage.removeItem('user');
		dispatch(logout());
	}
};

export default checkUser;
