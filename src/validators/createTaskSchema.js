const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().min(5).max(225).required(),
  description: Joi.string().min(5).required(),
  dueDate: Joi.date().iso().greater('now').required(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').required(),
  priority: Joi.string().valid('low', 'medium', 'high').required(),
  assignedTo: Joi.string().email().lowercase().required(),
  tags: Joi.array().items(Joi.string()).default([]).required(),
});

module.exports = createTaskSchema;
