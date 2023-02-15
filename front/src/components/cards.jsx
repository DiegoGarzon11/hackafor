import React, { useState, useEffect } from 'react';
import { Buscador } from './buscador';

export function Card({ results }) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/djs')
			.then((response) => response.json())
			.then((datos) => setData(datos))
			.catch((error) => console.error(error));
	}, []);
	return (
		<>
			<Buscador></Buscador>
			<div className='flex flex-wrap gap-8 p-5 items-center justify-center pl-80'>
				{data ? (
					data.map((el) =>
						el.djs.map((data) => (
							<div
								className='w-96 h-[450px]  shadow-black shadow-md flex flex-col justify-start bg-zinc-800 text-white'
								key={data.id}>
								<p className='px-5 font-semibold text-2xl '>{data.name}</p>
								<img src={data.imagen} alt='' className='h-60 bg-cover p-1' />
								<div className='flex flex-col gap-2 px-5 text-lg'>
									<p>Su nacionalidad es: {data.nacionalidad}</p>
									<p>Su cancion mas escuchada es: {data.cancionMasEscuchada}</p>
									<p>
										¿Ha asistido a tomorroland? -{' '}
										{data.tomorroland === true ? 'Si' : 'No'}
									</p>
								</div>
							</div>
						))
					)
				) : (
					<p>Cargando...</p>
				)}
			</div>
		</>
	);
}
