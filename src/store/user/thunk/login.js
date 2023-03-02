import axios from 'axios';
import { login, loginError } from '../actions';
const url = process.env.REACT_APP_API_URL;
const loginHandler = (data) => {
	return async (dispatch) => {
		const { data: user } = await axios.post(`${url}/user`, data);
		if (user) {
			dispatch(login(user));
			localStorage.setItem('user', JSON.stringify({ name: user.name, email: user.email }));
		} else {
			dispatch(loginError());
		}
	};
};

export default loginHandler;
