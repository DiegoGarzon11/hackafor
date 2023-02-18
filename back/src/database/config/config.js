require('dotenv').config();
const data = {
	development: {
		username: 'diegog11',
		password: 'hackaforpass123',
		database: 'diegog11_hackafor',
		host: 'mysql-diegog11.alwaysdata.net',
		dialect: 'mysql',
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',	
		host: '127.0.0.1',
		dialect: 'mysql',
	},
};
module.exports = data;
