import React, { useState } from 'react';
import { obtenerDatos } from './Api';

export function Buscador(props) {
	const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
	function handleSearchTextChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);

    // Realiza una solicitud HTTP a la API con la entrada de búsqueda actual
		obtenerDatos(`djs/${searchText}`).then(data=>{
			setSearchResults(data)
			console.log(data);
		})
  
  }
	
	return (
		<form className='flex p-5 justify-center  ' >
			<div className=' border-b border-teal-500 py-2 mt-6'>
				<input
					className='bg-transparent text-lg text-white mr-3 py-1 px-2  focus:outline-none'
					placeholder='Search...'
					type='text'
					value={searchText}
					onChange={handleSearchTextChange}
				/>
				<button
					className='bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
					type='submit'
					>
					Search
				</button>
			</div>
			
		</form>
	);
}
