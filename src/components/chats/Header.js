import { useDispatch, useSelector } from 'react-redux';
import logOutHandler from '../../store/user/thunk/logout';
import styles from './Chats.module.scss';

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const logOut = () => {
		dispatch(logOutHandler);
	};
	return (
		<header className="flex items-center justify-between border-b-4 border-sky-900 pb-2">
			<strong>{user.name}</strong>
			<button onClick={logOut} className={styles['logout-btn']}>
				Logout
			</button>
		</header>
	);
};

export default Header;
