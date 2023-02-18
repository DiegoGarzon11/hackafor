import { useEffect, useState } from 'react';

export function Aside() {
	const [genero, setGenero] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/generos')
			.then((res) => res.json())
			.then((data) => setGenero(data));
	}, []);

	return (
		<aside className='w-60 h-screen fixed '>
			<div className='bg-zinc-900 flex justify-center'>
				<img src='../../public/dj.svg' alt='' className='w-40' />
			</div>
			<div className='h-screen bg-zinc-900 text-2xl pt-8 font-serif flex flex-col  justify-start '>
				{genero
					? genero.map((e) => (
							<button
								className='text-slate-100 capitalize items-center h-24 transition duration-100 flex justify-center hover:bg-neutral-800 hover:scale-[1.1]'
								key={e.id}>
								{e.nombre}
							</button>
					  ))
					: ''}
			</div>
		</aside>
	);
}
