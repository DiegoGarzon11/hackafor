import { useEffect, useState } from 'react';

export function Aside() {
	const [genero, setGenero] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/djs/generos')
			.then((res) => res.json())
			.then((data) => setGenero(data));
	}, []);

	return (
		<aside className='w-60 h-screen fixed'>
			<div className='h-screen bg-zinc-900 text-2xl pl-7 pt-16 font-serif'>
				{genero
					? genero.map((e) => (
							<button
								className='text-slate-100 w-full flex capitalize items-center h-24 transition duration-150 hover:ease-in '
								key={e.id}>
								{e}
							</button>
					  ))
					: ''}
			</div>
		</aside>
	);
}
