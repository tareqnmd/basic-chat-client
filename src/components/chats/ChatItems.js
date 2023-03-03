import ChatItem from './ChatItem';
import styles from './Chats.module.scss';

const ChatItems = () => {
	return (
		<div class={styles['chat-items']}>
			<ChatItem />
		</div>
	);
};

export default ChatItems;
