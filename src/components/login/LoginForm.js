import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import login from '../../store/user/thunk/login';
import styles from './Login.module.scss';
const LoginForm = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
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
			<button type="submit">
				{user.loading ? <AiOutlineLoading3Quarters /> : <FiLogIn />}
				<span>Login</span>
			</button>
		</form>
	);
};

export default LoginForm;
