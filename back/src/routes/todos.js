const { Router } = require('express');
const controller = require('../controller/djs.controller');
const route = Router();
route.get('/djs', controller.todos);
module.exports = route;
