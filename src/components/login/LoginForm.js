import { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import styles from './LoginForm.module.scss';
const LoginForm = () => {
	const [loginData, setLoginData] = useState({});
	const loginHandler = (e) => {
		e.preventDefault();
		console.log('loginData', loginData);
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
			<button type="submit">
				<FiLogIn />
				<span>Login</span>
			</button>
		</form>
	);
};

export default LoginForm;
