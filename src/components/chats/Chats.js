import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../../store/features/chats/chatSlice';
import Chat from './Chat';
import styles from './Chats.module.scss';

const Chats = () => {
	const dispatch = useDispatch();
	const { chats, loading, error } = useSelector((state) => state.chat);
	useEffect(() => {
		dispatch(fetchChats());
	}, [dispatch]);
	return (
		<div className={styles['chat-items']}>
			{loading ? (
				<div className="p-3 text-center">Loading</div>
			) : error ? (
				<div className="p-3 text-center text-red-600">{error}</div>
			) : chats.length > 0 ? (
				chats.map((chat, i) => <Chat key={i} chat={chat} />)
			) : (
				<div className="p-3 text-center">No Messages</div>
			)}
		</div>
	);
};

export default Chats;
