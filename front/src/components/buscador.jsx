import React, { useState, useEffect } from 'react';

export function Buscador(props) {
	const [query, setQuery] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSearch(query);
	};

	return (
		<form
			className='flex flex-wrap gap-8 p-5 items-center justify-center pl-80'
			onSubmit={handleSubmit}>
			<div className='flex items-center border-b border-teal-500 py-2'>
				<input
					className='appearance-none bg-transparent border-none w-full text-lg text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
					placeholder='Search...'
					type='text'
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<button
					className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
					type='submit'>
					Search
				</button>
			</div>
		</form>
	);
}
