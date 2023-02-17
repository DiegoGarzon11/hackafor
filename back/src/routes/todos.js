const { Router } = require('express');
const controller = require('../controller/djs.controller');
const route = Router();
route.get('/djs', controller.todos);
route.get('/djs/generos', controller.generos);
route.get('/djs/:name', controller.buscador);

route.get('/djs/house', controller.house);
route.get('/djs/techno', controller.techno);
route.get('/djs/trance', controller.trance);
route.get('/djs/Dubstep', controller.Dubstep);
route.get('/djs/Drum', controller.drum);
module.exports = route;
