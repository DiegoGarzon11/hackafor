import React, { useState } from 'react';
import { obtenerDatos } from './Api';

export function Buscador({ resultados, onSearch, value }) {
	const [searchText, setSearchText] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	function handleSearchTextChange(event) {
		event.preventDefault();
		const searchText = event.target.value;
		setSearchText(searchText);
		obtenerDatos(`djs/${searchText}`).then((data) => {
			setSearchResults(data);
			onSearch(data, searchText);
		});
	}

	return (
		<div>
			<form className='flex p-5 justify-center  ' onSubmit={handleSearchTextChange}>
				<div className=' border-b border-teal-500 py-2 mt-6'>
					<input
						className='bg-transparent text-lg text-white mr-3 py-1 px-2  focus:outline-none'
						placeholder='Search...'
						type='text'
						value={searchText}
						onChange={handleSearchTextChange}
					/>
				</div>
			</form>
		</div>
	);
}
