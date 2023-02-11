const djs = require('../database/djs.json');
const controller = {
	todos: (req, res) => {
		res.json(djs);
	},
};
module.exports = controller;
