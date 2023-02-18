import { Card } from './components/cards';
import { Aside } from './components/Aside';
import { useEffect, useState } from 'react';
import { Buscador } from './components/buscador';

function App() {
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/djs')
			.then((res) => res.json())
			.then((data) => setDatos(data))
			.catch((error) => console.error(error));
	}, []);

	const cards = datos.map((e) => {
		const validarGenero = () => {
			switch (e.generosId) {
				case '1':
					return 'House';
				case '2':
					return 'Techno';
				case '3':
					return 'Trance';
				case '4':
					return 'Dubstep';
				case '5':
					return 'Drum and Bass';
				default:
					return 'No hemos encontrado su genero';
			}
		};

		return (
			<>
				<Card
					key={e.id}
					name={e.nombre}
					image={e.imagen}
					genero={validarGenero()}
					nacionalidad={e.nacionalidad}
					cancion={e.cancion}
					tomorrowland={e.tomorroland}
				/>
			</>
		);
	});

	return (
		<>
			<main>
				<Aside />

				<Buscador onSearch={datos.map((e) => e.name)}></Buscador>
				<section className='flex flex-wrap gap-5 pl-96'>{cards}</section>
			</main>
		</>
	);
}

export default App;
