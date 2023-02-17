import { Card } from './components/cards';
import { Aside } from './components/Aside';
import { useEffect, useState } from 'react';
import { Buscador } from './components/Buscador';

function App() {
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/djs/')
			.then((res) => res.json())
			.then((data) => setDatos(data))
			.catch((error) => console.error(error));
	}, []);

	const cards = datos.map((e) => {
		return (
			<Card
				key={e.id}
				name={e.name}
				image={e.info.imagen}
				genero={e.info.genero}
				nacionalidad={e.info.nacionalidad}
				cancion={e.info.cancionMasEscuchada}
				tomorrowland={e.info.tomorrowland}
			/>
		);
	});

	return (
		<>
			<main>
			<Aside />
				<Buscador />
				<section className='flex flex-wrap gap-5 pl-96'>{cards}</section>
			</main>
		</>
	);
}

export default App;
