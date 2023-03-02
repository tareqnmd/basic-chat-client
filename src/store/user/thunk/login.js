import axios from 'axios';
import { login, logout } from '../actions';
const url = process.env.REACT_APP_API_URL;
const loginHandler = (data) => {
	return async (dispatch) => {
		const { data: user } = await axios.post(`${url}/user`, data);
		dispatch(user ? login(user) : logout());
	};
};

export default loginHandler;
