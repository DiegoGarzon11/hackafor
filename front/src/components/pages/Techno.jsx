import { obtenerDatos } from '../Api';
import { useEffect, useState } from 'react';
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
				<header className='h-20 flex justify-center'>
					<h1 className='text-6xl text-teal-500 font-sans '>Techno</h1>
				</header>
				<hr className='text-slate-400 w-full mb-6' />
				<section className='flex flex-wrap gap-5 justify-center '>
					{isLoading ? (
						<div className=' flex justify-center'>
							<div className='loader mt-52 border-t-teal-500'></div>
						</div>
					) : (
						''
					)}
					{datos ? datos.map((dato) => <Card key={dato.id} genero={'Techno'} {...dato} />) : ''}
				</section>
			</main>
		</>
	);
}
