import { useSelector } from 'react-redux';
import Chats from './components/chats/Chats';
import Login from './components/login/Login';

const App = () => {
	const user = useSelector((state) => state.user);
	return <main className="app">{user?.loggedIn ? <Chats /> : <Login />}</main>;
};

export default App;
