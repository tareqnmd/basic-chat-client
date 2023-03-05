import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatArea from './components/chats/ChatArea';
import Login from './components/login/Login';
import checkUser from './store/user/thunk/checkUser';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkUser);
	}, [dispatch]);
	const user = useSelector((state) => state.user);
	return <main className="app">{user?.loggedIn ? <ChatArea /> : <Login />}</main>;
};

export default App;
