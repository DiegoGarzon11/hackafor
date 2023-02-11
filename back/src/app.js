const express = require('express');
const rutes = require('./routes/todos.js');
const app = express();
app.use('/', rutes);

app.listen('3000', () => {
	console.log('port on 3000');
});
