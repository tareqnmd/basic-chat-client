import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';

const Login = () => {
	const user = useSelector((state) => state.user);

	return (
		<>
			<>{user.loginError && 'Login Failed'}</>
			<LoginForm />
		</>
	);
};

export default Login;
