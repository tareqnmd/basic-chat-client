import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import styles from './Chats.module.scss';
const ChatItemSend = () => {
	const [chat, setChat] = useState('');
	return (
		<form className={styles['chat-send']}>
			<div className="chat-send-area">
				<input
					type="text"
					placeholder="Comment"
					onChange={(e) => {
						setChat(e.target.value);
					}}
					required
				/>
				<button disabled={chat.length < 1} type="submit">
					<FiSend />
					<span>Send</span>
				</button>
			</div>
		</form>
	);
};

export default ChatItemSend;
