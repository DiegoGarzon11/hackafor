import React, { useState } from 'react';

export function Card(props) {
	return (
		<>
			<div className=' bg-zinc-900 text-white flex shadow-black shadow-lg rounded-lg flex-col items-center  w-80 h-auto'>
				<p className='font-semibold text-lg p-3'>{props.name}</p>
				<img src={props.image} alt='' className='w-72 h-56 object-fill rounded-sm' />
				<ul className='flex flex-col gap-2 px-5 py-5 text-lg border-t border-t-teal-500 mt-3 text-start'>
					<li>
						<span className='font-semibold'>Genero :</span> {props.genero}
					</li>
					<li>
						<span className='font-semibold'>Nacionalidad :</span>
						{props.nacionalidad}
					</li>
					<li>
						<span className='font-semibold'> Cancion mas escuchada :</span>{' '}
						{props.cancion}
					</li>
					<li>
						<span className='font-semibold'>
							¿Ha participado en algun tomorroland? :
						</span>
						<span className='px-2'>{props.tomorrowland == 1 ? 'Si' : 'No'}</span>
					</li>
				</ul>
			</div>
		</>
	);
}
