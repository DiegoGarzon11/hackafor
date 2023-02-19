import { Card } from '../cards';
import { useEffect, useState } from 'react';
import { Buscador } from '../buscador';
import { obtenerDatos } from '../Api';
import '../../App.css';

function Principal() {
	const [datos, setDatos] = useState([]);
	const [result, setResult] = useState('');
	const [valor, setValor] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		obtenerDatos('djs').then((data) => {
			setDatos(data);
			setIsLoading(false);
		});
	}, []);

	function handleSearchResults(results, searchText) {
		setResult(results);
		setValor(searchText);
	}

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
				<Buscador resultados={result} onSearch={handleSearchResults}>
					{' '}
				</Buscador>

				<section className='flex flex-wrap gap-8 justify-center  my-16'>
					{isLoading ? (
						<div className=' flex justify-center'>
							<div className='loader mt-52 border-t-teal-500'></div>
						</div>
					) : (
						''
					)}
					{result
						? result.map((dato) => (
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
						: datos.map((dato) => (
								<Card
									key={dato.id}
									nombre={dato.nombre}
									cancion={dato.cancion}
									genero={generoCorrespondiente(dato.generosId)}
									imagen={dato.imagen}
									nacionalidad={dato.nacionalidad}
									tomorrowland={dato.tomorroland}
								/>
						  ))}
					{result && result.length == 0 ? (
						<div className='flex  items-center font-semibold text-xl'>
							<p className='text-white'>
								No hay resultados para la busqueda de :{' '}
								<span className='text-teal-500'>"{valor}"</span> en nuestra base de
								datos <span className='text-teal-500'>:(</span>
							</p>
						</div>
					) : (
						''
					)}
				</section>
			</main>
		</>
	);
}

export default Principal;
