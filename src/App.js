import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
