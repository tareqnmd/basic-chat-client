import { useEffect, useState } from 'react';
import './App.css';
import Comments from './components/Comments';
import Header from './components/Header';

// Add with other imports
import io from 'socket.io-client';
const URL = process.env.REACT_APP_API_URL;

// Before the component definition:
const socket = io.connect(URL);

function App() {
	const [users, setUsers] = useState([]);
	const [selectedUserId, setSelectedUserId] = useState('');

	async function fetchUsers() {
		const result = await fetch(`${URL}/users`);
		const users = await result.json();
		setUsers(users?.length > 0 ? users : []);
	}

	useEffect(() => {
		fetchUsers();
	}, []);
	return (
		<div className="App">
			<Header
				users={users}
				selectedUserId={selectedUserId}
				setSelectedUserId={setSelectedUserId}
			/>
			<Comments socket={socket} selectedUserId={selectedUserId} />
		</div>
	);
}

export default App;
