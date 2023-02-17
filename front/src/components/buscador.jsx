import React, { useState } from 'react';

export function Buscador(props) {
	const [inputValue, setInputValue] = useState('');
	const [resultados, setResultados] = useState([]);

	const handleBuscarClick = (event) => {
		event.preventDefault();
		setInputValue(event.target.value);
		props.onSearch(event.target.value);
		if (inputValue) {
			fetch(`http://localhost:3000/djs/${inputValue}`)
				.then((res) => res.json())
				.then((data) => setResultados(data))
				.catch((error) => console.error(error));
		}
	};

	return (
		<form
			className='flex flex-wrap gap-8 p-5 items-center justify-center pl-80'
			onSubmit={handleBuscarClick}>
			<div className='flex items-center border-b border-teal-500 py-2'>
				<input
					className='appearance-none bg-transparent border-none w-full text-lg text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
					placeholder='Search...'
					type='text'
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
				/>
				<button
					className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
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
