const express = require('express');

const routes  = express.Router();

const EstagiarioController = require('./controllers/EstagiarioController');

routes.get('/estagiarios', EstagiarioController.showAllEstagiarios);
routes.post('/estagiarios', EstagiarioController.storeEstagiario);
routes.put('/estagiarios/:id', EstagiarioController.updateEstagiario);
routes.delete('/estagiarios/:id', EstagiarioController.deleteEstagiario);


module.exports = routes;