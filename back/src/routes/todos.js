const { Router } = require('express');
const controller = require('../controller/djs.controller');
const route = Router();
route.get('/djs', controller.todos);
route.get('/generos', controller.generos);
// route.get('/djs/:name', controller.buscador);

route.get('/djs/house', controller.house);
route.get('/djs/techno', controller.techno);
route.get('/djs/trance', controller.trance);
route.get('/djs/dubstep', controller.dubstep);
route.get('/djs/drum', controller.drum);
route.get('**', controller.noFound);
module.exports = route;
