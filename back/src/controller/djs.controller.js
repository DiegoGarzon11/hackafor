const db = require('../database/models');

const controller = {
	todos: (req, res) => {
		db.djs.findAll().then((data) => {
			res.json(data);
		});
	},
	generos: (req, res) => {
		db.generos.findAll().then((data) => {
			res.json(data);
		});
	},
	// buscador: (req, res) => {
	// 	db.djs.findAll().then((dj) => {
	// 		const filtrados = dj.filter((el) =>
	// 			el.nombre.toLowerCase().includes(req.params.name.toLowerCase())
	// 		);
	// 		res.json(filtrados.map((dj) => dj.name));
	// 	});
	// },

	house: (req, res) => {
		db.djs
			.findAll({
				where: {
					generosId: 1,
				},
			})
			.then((data) => {
				res.json(data);
			});
	},
	techno: (req, res) => {
		db.djs
			.findAll({
				where: {
					generosId: 2,
				},
			})
			.then((data) => {
				res.json(data);
			});
	},
	trance: (req, res) => {
		db.djs
			.findAll({
				where: {
					generosId: 3,
				},
			})
			.then((data) => {
				res.json(data);
			});
	},
	dubstep: (req, res) => {
		db.djs
			.findAll({
				where: {
					generosId: 4,
				},
			})
			.then((data) => {
				res.json(data);
			});
	},
	drum: (req, res) => {
		db.djs
			.findAll({
				where: {
					generosId: 5,
				},
			})
			.then((data) => {
				res.json(data);
			});
	},
	noFound: (req, res) => {
		res.send('Pagina no encontrada');
	},
};
module.exports = controller;
