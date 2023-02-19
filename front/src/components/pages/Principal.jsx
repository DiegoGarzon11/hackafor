import { Card } from '../cards';
import { useEffect, useState } from 'react';
import { Buscador } from '../buscador';
import { obtenerDatos } from '../Api';
import '../../App.css';

function Principal() {
	const [datos, setDatos] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		obtenerDatos('djs').then((data) => {
			setDatos(data);
			setIsLoading(false);
		});
	}, []);
	
	function generoCorrespondiente(id) {
		for (let i of datos) {
			if (i.generosId && id == 1) {
				return 'House';
			} else if (i.generosId && id == 2) {
				return 'techno';
			} else if (i.generosId && id == 3) {
				return 'trance';
			} else if (i.generosId && id == 4) {
				return 'Dubstep';
			} else if (i.generosId && id == 5) {
				return 'Drum and Bass';
			}
		}
	}
	return (
		<>
			<main className='pl-60'>
				<Buscador></Buscador>
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
									genero={generoCorrespondiente(dato.generosId)}
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

export default Principal;
