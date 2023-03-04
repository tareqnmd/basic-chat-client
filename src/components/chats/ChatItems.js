import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../../store/features/chats/chatSlice';
import ChatItem from './ChatItem';
import styles from './Chats.module.scss';

const ChatItems = () => {
	const dispatch = useDispatch();
	const { chats } = useSelector((state) => state.chat);
	useEffect(() => {
		dispatch(fetchChats());
	}, [dispatch]);
	return (
		<div className={styles['chat-items']}>
			{chats.length > 0 ? (
				chats.map((chat, i) => <ChatItem key={i} chat={chat} />)
			) : (
				<div className="p-3 text-center">No Messages</div>
			)}
		</div>
	);
};

export default ChatItems;
