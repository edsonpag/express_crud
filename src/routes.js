const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');

routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.post('/users', UserController.store);

module.exports = routes;