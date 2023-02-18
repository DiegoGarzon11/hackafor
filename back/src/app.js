const express = require('express');
const path = require('path');
const rutes = require('./routes/todos.js');
const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
app.use('/', rutes);
app.use('**', rutes);

app.listen('3000', () => {
	console.log('port on 3000');
});
