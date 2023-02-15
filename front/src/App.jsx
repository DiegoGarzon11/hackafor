import { useState, useEffect } from 'react';
import Aside from './components/Aside';

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/djs')
			.then((response) => response.json())
			.then((data) => console.log(data[0].djs[0]))
			.catch((error) => console.error(error));
	}, []);
	return (
		<>
			<Aside />
			{data ? <p className='text-red-600'>{data[0].djs[0]}</p> : <p>Cargando...</p>}
		</>
	);
}

export default App;
