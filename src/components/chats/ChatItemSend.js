import styles from './Chats.module.scss';

const ChatItemSend = () => {
	return (
		<form className={styles['chat-send']}>
			<div className="chat-send-area">
				<input type="text" placeholder="Comment" required />
				<button type="submit">Send</button>
			</div>
		</form>
	);
};

export default ChatItemSend;
