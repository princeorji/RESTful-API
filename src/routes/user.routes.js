const express = require('express');
const controller = require('../controller/userController');
const validate = require('../middleware/validate');

const routes = express.Router();

routes.post('/register', validate('signup'), controller.signup);
routes.post('/login', validate('login'), controller.login);

module.exports = routes;
