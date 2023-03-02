import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';

const Login = () => {
	const user = useSelector((state) => state.user);

	return (
		<div>
			<strong className="block text-center text-red-900">
				{user.loginError && 'Login Failed'}
			</strong>
			<LoginForm />
		</div>
	);
};

export default Login;
