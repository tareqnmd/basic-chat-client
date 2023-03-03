import { useSelector } from 'react-redux';
import styles from './Chats.module.scss';

const ChatItem = ({ chat }) => {
	const { img, name, messages, userId } = chat;
	const { id } = useSelector((state) => state.user);
	console.log('id,userId', id, userId);
	return (
		<div
			className={`${styles['message-details']} ${userId === id ? styles['self-message'] : null}`}
		>
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
