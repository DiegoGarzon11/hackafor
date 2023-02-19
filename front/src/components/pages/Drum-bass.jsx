import { obtenerDatos } from '../Api';
import { useEffect, useState } from 'react';
import { Buscador } from '../buscador';
import { Card } from '../cards';

export function DrumAndBass() {
	const [datos, setDatos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		obtenerDatos('djs/drum').then((data) => {
			setDatos(data);
			setIsLoading(false);
		});
	}, []);

	return (
		<>
		
			<main className='pl-60'>
				<Buscador />
				<section className='flex flex-wrap gap-5 justify-center mt-8'>
					{isLoading ? (
						<div className=' flex justify-center'>
							<div className='loader mt-52 border-t-teal-500'></div>
						</div>
					) : (
						''
					)}
					{datos
						? datos.map((dato) => (
								<Card
									key={dato.id}
									nombre={dato.nombre}
									cancion={dato.cancion}
									genero={'Drum and Bass'}
									imagen={dato.imagen}
									nacionalidad={dato.nacionalidad}
									tomorrowland={dato.tomorroland}
								/>
						  ))
						: ''}
				</section>
			</main>
		</>
	);
}
