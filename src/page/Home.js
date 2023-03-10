import ChatHeader from '../components/chats/ChatHeader';
import Chats from '../components/chats/Chats';

const Home = () => {
	return (
		<main className="app">
			<section className="chats">
				<ChatHeader />
				<Chats />
			</section>
		</main>
	);
};

export default Home;
