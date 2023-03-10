import { useSelector } from 'react-redux';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
	const user = useSelector((state) => state.user);
	return (
		<main className="app">
			<strong className="block text-center text-red-900">
				{user.loginError && 'Login Failed'}
			</strong>
			<LoginForm />
		</main>
	);
};

export default Login;
