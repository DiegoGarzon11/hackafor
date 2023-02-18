const { Router } = require('express');
const controller = require('../controller/djs.controller');
const route = Router();
route.get('/djs', controller.todos);
route.get('/generos', controller.generos);
// route.get('/djs/:name', controller.buscador);

route.get('/generos/house', controller.house);
route.get('/generos/techno', controller.techno);
route.get('/generos/trance', controller.trance);
route.get('/generos/dubstep', controller.dubstep);
route.get('/generos/drum', controller.drum);
route.get('**', controller.noFound);
module.exports = route;
