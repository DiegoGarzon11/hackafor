import { obtenerDatos } from '../Api';
import { useEffect, useState } from 'react';
import { Buscador } from '../buscador';
import { Card } from '../cards';

export function Techno() {
	const [datos, setDatos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		obtenerDatos('djs/techno').then((data) => {
			setDatos(data);
			setIsLoading(false);
		});
	}, []);

	return (
		<>
			<main className='pl-60'>
			<header className='h-28 flex justify-center items-center'>
					<h1 className='text-6xl text-teal-500 font-sans '>Techno</h1>
				</header>
				<section className='flex flex-wrap gap-5 justify-center '>
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
									genero={'Techno'}
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
