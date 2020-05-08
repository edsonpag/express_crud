const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');

routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.post('/users', UserController.store);
routes.delete('/users/:user_id', UserController.destroy);
routes.put('/users/:user_id', UserController.update);

module.exports = routes;