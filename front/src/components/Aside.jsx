import { useEffect, useState } from 'react';

export function Aside() {
	const [genero, setGenero] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/djs/generos')
			.then((res) => res.json())
			.then((data) => setGenero(data));
	}, []);


	return (
		<aside className='bg-slate-700 w-60 h-screen fixed '>
			<div className='h-screen bg-zinc-900'>
				{genero
					? genero.map((e) => (
							<button className='text-slate-100 ' key={e.id}>
								{e}
							</button>
					  ))
					: ''}
			</div>
		</aside>
	);
}
