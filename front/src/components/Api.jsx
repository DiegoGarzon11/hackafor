export function obtenerDatos(ruta) {
	return (
		fetch(`http://localhost:3000/${ruta}`)
		.then((res) => res.json())
		.then((data) => data)
		)
}
