import { Routes, Route } from 'react-router-dom';
import { House } from './components/pages/House';

import './App.css';
import Principal from './components/pages/Principal';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' exact element={<Principal />} />
				<Route path='/house' exact element={<House />} />
			</Routes>
		</>
	);
}

export default App;
