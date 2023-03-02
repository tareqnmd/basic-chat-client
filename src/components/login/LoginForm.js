import { useState } from 'react';
import { useDispatch } from 'react-redux';
import login from '../../store/user/thunk/login';
import styles from './Login.module.scss';
const LoginForm = () => {
	const dispatch = useDispatch();
	const [loginData, setLoginData] = useState({});
	const loginHandler = (e) => {
		e.preventDefault();
		dispatch(login(loginData));
	};

	const stateChange = (e) => {
		const { name, value } = e.target;
		setLoginData((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<form className={styles.form} onSubmit={loginHandler}>
			<input
				type="email"
				name="email"
				placeholder="john.doe@company.com"
				onChange={stateChange}
				required
			/>
			<input
				type="password"
				name="password"
				placeholder="•••••••••"
				onChange={stateChange}
				required
			/>
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
