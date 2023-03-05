import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import logOutHandler from '../../store/user/thunk/logout';
import styles from './Chats.module.scss';
const ChatHeader = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const logOut = () => {
		dispatch(logOutHandler);
	};
	return (
		<header className="flex items-center justify-between border-b-4 border-gray-900 pb-2">
			<div className={styles['header-info']}>
				<img src={user.imgSrc} alt={user.name} />
				<div className="flex flex-col">
					<strong>{user.name}</strong>
					<small>{user.email}</small>
				</div>
			</div>
			<button onClick={logOut} className={styles['logout-btn']}>
				<FiLogOut />
				<span>Logout</span>
			</button>
		</header>
	);
};

export default ChatHeader;
