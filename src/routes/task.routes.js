const express = require('express');
const controller = require('../controller/taskController');
const validate = require('../middleware/validate');

const routes = express.Router();

routes.post('', validate('createTask'), controller.create);
routes.get('', controller.tasks);
routes.get('/:id', controller.getById);
routes.put('/:id', validate('updateTask'), controller.update);
routes.post('/share', validate('shareTask'), controller.shareTask);
routes.delete('/:id', controller.remove);

module.exports = routes;
