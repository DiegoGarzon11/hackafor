import React, { useState, useEffect } from 'react';
import { HeartIcon } from './Icons';
import { obtenerDatos } from './Api';

export function Card({ nombre, imagen, genero, nacionalidad, cancion, tomorrowland }) {
	const [datos, setDatos] = useState([]);

	const [corazonLleno, setCorazonLleno] = useState(false);

	const handleClick = () => {
		setCorazonLleno(!corazonLleno);
	};

	useEffect(() => {
		obtenerDatos('djs').then((data) => {
			setDatos(data);
		});
	}, []);

	return (
		<>
			<div className=' bg-zinc-900 text-slate-300 flex shadow-black shadow-sm rounded-lg flex-col items-center w-[360px] '>
				<div className=' w-full'>
					<p className='font-semibold text-lg p-3 bg-zinc-800 rounded-t-lg'>{nombre}</p>
					<img src={imagen} alt='' className='w-full h-56 object-fill ' />
					<ul className='flex flex-col gap-2 px-3 py-5 text-base  mt-3 text-start h-auto'>
						<li className='flex flex-col'>
							<span className='font-semibold text-white opacity-50'>Genero</span>{' '}
							{genero[0].toUpperCase() + genero.slice(1)}
						</li>
						<li className='flex flex-col'>
							<span className='font-semibold text-white opacity-50'>Nacionalidad</span>{' '}
							{nacionalidad}
						</li>
						<li className='flex flex-col'>
							<span className='font-semibold text-white opacity-50'>
								Cancion mas escuchada
							</span>{' '}
							{cancion}
						</li>
						<li className='flex flex-col'>
							<span className='font-semibold text-white opacity-50'>
								¿Ha participado en algun tomorroland?
							</span>
							<span>{tomorrowland == 1 ? 'Si' : 'No'}</span>
						</li>
					</ul>
				</div>
				<div className='flex justify-start w-full p-2'>
					<span className='cursor-pointer'>
						<HeartIcon fill={corazonLleno ? 'red' : '#262626'} onClick={handleClick} />
					</span>
				</div>
			</div>
		</>
	);
}
