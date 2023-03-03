import { login, logout } from '../actions';

const checkUser = async (dispatch) => {
	try {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user.email) {
			dispatch(login(user));
			localStorage.setItem(
				'user',
				JSON.stringify({ id: user.id, name: user.name, email: user.email })
			);
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
