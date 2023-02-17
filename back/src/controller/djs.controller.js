const djs = require('../database/djs.json');
const controller = {
	todos: (req, res) => {
		res.json(djs);
	},
	generos: (req, res) => {
		const generos = djs.reduce((acc, artista) => {
			if (!acc.includes(artista.info.genero)) {
				acc.push(artista.info.genero);
			}
			return acc;
		}, []);

		res.json(generos);
	},
	buscador: (req, res) => {
		const filtrados = djs.map((dj) =>
			dj.djs.filter((el) => el.name.toLowerCase().includes(req.params.name.toLowerCase()))
		);
		res.json(filtrados);
	},

	house: (req, res) => {
		for (const i of djs) {
			console.log(i.id);
		}
	},
	techno: (req, res) => {
		for (const i of djs) {
			if (i.genero === 'techno') {
				res.json(i.djs);
			}
		}
	},
	trance: (req, res) => {
		for (const i of djs) {
			if (i.genero === 'trance') {
				res.json(i.djs);
			}
		}
	},
	Dubstep: (req, res) => {
		for (const i of djs) {
			if (i.genero === 'Dubstep') {
				res.json(i.djs);
			}
		}
	},
	drum: (req, res) => {
		for (const i of djs) {
			if (i.genero === 'Drum and Bass') {
				res.json(i.djs);
			}
		}
	},
};
module.exports = controller;
