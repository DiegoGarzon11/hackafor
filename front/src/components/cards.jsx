import React, { useState, useEffect } from 'react';
import { Buscador } from './buscador';

export function Card({ results }) {
	const [data, setData] = useState();
	const [query, setQuery] = useState('');

	useEffect(() => {
		const url = `http://localhost:3000/djs/`;
		fetch(url)
			.then((response) => response.json())
			.then((datos) => {
				setTimeout(() => {
					setData(datos);
				}, 1000);
			})
			.catch((error) => console.error(error));
	}, [query]);

	const handleSearch = (query) => {
		setQuery(query);
	};
	return (
		<>
			<Buscador></Buscador>

			<main className='flex gap-5 flex-wrap pl-72  justify-center py-5'>
				{data ? (
					data.map((e) => (
						<div className=' bg-zinc-900 text-white flex shadow-black shadow-lg rounded-lg flex-col items-center  w-80 h-auto'>
							<p className='font-semibold text-lg p-3'>{e.name}</p>
							<img src={e.info.imagen} alt='' className='w-full h-56 bg-cover ' />
							<ul className='flex flex-col gap-2 px-5 py-5 text-lg'>
								<li>
									<span className='font-semibold'>Genero</span> : {e.info.genero}
								</li>
								<li>
									{' '}
									<span className='font-semibold'>Nacionalidad : </span>
									{e.info.nacionalidad}
								</li>
								<li>
									{' '}
									<span className='font-semibold'>
										{' '}
										Cancion mas escuchada{' '}
									</span> : {e.info.cancionMasEscuchada}
								</li>
								<li>
									<span className='font-semibold'>
										¿Ha participado en algun tomorroland?
									</span>{' '}
									{e.info.tomorroland === true ? 'Si' : ' No'}
								</li>
							</ul>
						</div>
					))
				) : (
					<p>cargando</p>
				)}
			</main>
		</>
	);
}
