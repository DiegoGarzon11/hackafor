import React, { useState } from 'react';

export function Buscador(props) {
	const [inputValue, setInputValue] = useState('');
	const [resultados, setResultados] = useState([]);

	const handleBuscarClick = (event) => {
		console.log(event.target.value);
		event.preventDefault();
	};

	return (
		<form className='flex p-5 justify-center  ' onSubmit={handleBuscarClick}>
			<div className=' border-b border-teal-500 py-2 mt-10'>
				<input
					className='bg-transparent text-lg text-white mr-3 py-1 px-2  focus:outline-none'
					placeholder='Search...'
					type='text'
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
				/>
				<button
					className='bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
					type='submit'
					onClick={handleBuscarClick}>
					Search
				</button>
			</div>
			{resultados.map((resultado) => (
				<div key={resultado.id}>{resultado.name}</div>
			))}
		</form>
	);
}
