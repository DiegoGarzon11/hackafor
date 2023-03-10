import { Routes, Route } from 'react-router-dom';
import { House } from './components/pages/House';
import { Techno } from './components/pages/Techno';
import { Trance } from './components/pages/Trance';
import { Dubstep } from './components/pages/Dubstep';
import { DrumAndBass } from './components/pages/Drum-bass';
import { Aside } from './components/Aside';
import './App.css';
import Principal from './components/pages/Principal';

function App() {
	return (
		<>
			<Aside />
			<Routes>
				<Route path='/' exact element={<Principal />} />
				<Route path='/house' element={<House />} />
				<Route path='/techno' element={<Techno />} />
				<Route path='/trance' exact element={<Trance />} />
				<Route path='/dubstep' element={<Dubstep />} />
				<Route path='/drum' element={<DrumAndBass />} />
			</Routes>
		</>
	);
}

export default App;
