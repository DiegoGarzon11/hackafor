import React, { useState, useEffect } from 'react';

export function Card({ nombre, img }) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/djs')
			.then((response) => response.json())
			.then((datos) => setData(datos))
			.catch((error) => console.error(error));
	}, []);
	return (
		<>
			<div className='flex flex-wrap gap-5 p-5 items-center justify-center'>
				{data ? (
					data.map((el) =>
						el.djs.map((data) => (
							<div
								className='w-96 h-[400px]  shadow-black shadow-sm flex flex-col justify-start'
								key={data.id}>
								<p className='px-5 '>{data.name}</p>
								<img src={data.imagen} alt='' className='h-60 bg-cover p-1' />
								<div className='flex flex-col gap-2 px-5'>
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
