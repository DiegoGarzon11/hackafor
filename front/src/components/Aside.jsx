import { useEffect, useState } from 'react';

export  function Aside() {
	const [genero, setGenero] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/djs')
			.then((res) => res.json())
			.then((data) => setGenero(data));
	}, []);
   

	return (
		<aside className='bg-slate-700 w-60 h-screen fixed '>
			<div className='h-max'>
            {genero ? genero.map((e)=> <p className='text-slate-100 ' key={e.genero}>{e.genero}</p>) : ''}
         </div>
		</aside>
	);
}
