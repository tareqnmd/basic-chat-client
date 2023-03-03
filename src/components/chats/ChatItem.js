import styles from './Chats.module.scss';

const ChatItem = () => {
	return (
		<div className={styles['user-info']}>
			<img
				src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
				alt="user_name"
				title="user_name"
			/>
			<div>
				<strong>comment</strong>
				<strong>comment</strong>
				<strong>comment</strong>
			</div>
		</div>
	);
};

export default ChatItem;
