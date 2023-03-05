import { useSelector } from 'react-redux';
import styles from './Chats.module.scss';

const Chat = ({ chat }) => {
	const { img, name, messages, userId } = chat;
	const { id } = useSelector((state) => state.user);
	return (
		<div
			className={`${styles['message-details']} ${
				userId === id ? styles['self-message'] : null
			}`}
		>
			<img src={img} alt={name} title={name} />
			<div>
				{messages.map((message, i) => (
					<strong key={i}>{message}</strong>
				))}
			</div>
		</div>
	);
};

export default Chat;
