import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchChats } from '../../store/features/chats/chatSlice';
import ChatItem from './ChatItem';
import styles from './Chats.module.scss';

const ChatItems = () => {
	const { chats } = useSelector((state) => state.chat);
	useEffect(() => {
		fetchChats();
	}, []);
	return (
		<div className={styles['chat-items']}>
			{chats.length > 0 ? (
				chats.map((chat) => <ChatItem chat={chat} />)
			) : (
				<div className="p-3 text-center">No Messages</div>
			)}
		</div>
	);
};

export default ChatItems;
