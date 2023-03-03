import ChatItem from './ChatItem';
import styles from './Chats.module.scss';

const chats = [
	{
		name: '',
		img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
		messages: ['comment 11', 'comment 12'],
	},
	{
		name: '',
		img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		messages: ['comment 21', 'comment 22', 'comment 23'],
	},
	{
		name: '',
		img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
		messages: ['comment 31'],
	},
];

const ChatItems = () => {
	return (
		<div class={styles['chat-items']}>
			{chats.map((chat) => (
				<ChatItem chat={chat} />
			))}
		</div>
	);
};

export default ChatItems;
