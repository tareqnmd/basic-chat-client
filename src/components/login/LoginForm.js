import { useState } from 'react';
import styles from './Login.module.scss';
const LoginForm = () => {
	const [loginData, setLoginData] = useState({});
	const loginHandler = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setLoginData((prev) => ({ ...prev, [name]: value }));
		console.log(loginData);
	};
	return (
		<form className={styles.form} onSubmit={loginHandler}>
			<input type="email" name="email" placeholder="john.doe@company.com" required />
			<input type="password" name="password" placeholder="•••••••••" required />
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
