import { useEffect, useState } from 'react';
import { obtenerDatos } from '../Api';
import { Card } from '../cards';
import { Aside } from '../Aside';
import { Buscador } from '../buscador';
export function House() {
	const [datos, setDatos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		obtenerDatos('djs/house').then((data) => {
			setDatos(data);
			setIsLoading(false);
		});
	}, []);
	return (
		<>
			<Aside />
			<main className='pl-60'>
				<Buscador />
				<section className='flex flex-wrap gap-5 justify-center mt-28'>
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
									genero={'House'}
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