import ChatArea from './ChatArea';
import styles from './Chats.module.scss';
import Header from './Header';

const Chats = () => {
	return (
		<section className={styles.chats}>
			<Header />
			<ChatArea />
		</section>
	);
};

export default Chats;
