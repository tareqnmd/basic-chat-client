import { useSelector } from 'react-redux';
import styles from './Chats.module.scss';

const Header = () => {
	const user = useSelector((state) => state.user);
	return (
		<header className="flex items-center justify-between border-b-4 border-sky-900 pb-2">
			<strong>{user.name}</strong>
			<button className={styles['logout-btn']}>Logout</button>
		</header>
	);
};

export default Header;
