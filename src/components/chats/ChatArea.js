import ChatFooter from './ChatFooter';
import ChatHeader from './ChatHeader';
import Chats from './Chats';
import styles from './Chats.module.scss';

const ChatArea = () => {
	return (
		<section className={styles.chats}>
			<ChatHeader />
			<Chats />
			<ChatFooter />
		</section>
	);
};

export default ChatArea;
