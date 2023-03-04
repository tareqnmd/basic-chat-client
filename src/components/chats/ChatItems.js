import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatItem from './ChatItem';
import styles from './Chats.module.scss';
const url = process.env.REACT_APP_API_URL;

const ChatItems = () => {
	const [chats, setChats] = useState([]);
	const fetchComments = async () => {
		const { data } = await axios.get(`${url}/comments`);
		setChats(data);
	};
	useEffect(() => {
		fetchComments();
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
