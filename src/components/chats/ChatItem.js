import styles from './Chats.module.scss';

const ChatItem = ({ chat }) => {
	const { img, name, messages } = chat;
	return (
		<div className={styles['message-details']}>
			<img src={img} alt={name} title={name} />
			<div>
				{messages.map((message) => (
					<strong>{message}</strong>
				))}
			</div>
		</div>
	);
};

export default ChatItem;
