const Joi = require('joi');

const updateTaskSchema = Joi.object({
  title: Joi.string().min(5).max(225).optional(),
  description: Joi.string().min(5).optional(),
  dueDate: Joi.date().iso().greater('now').optional(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').optional(),
  priority: Joi.string().valid('low', 'medium', 'high').optional(),
  assignedTo: Joi.string().email().lowercase().optional(),
  tags: Joi.array().items(Joi.string()).default([]).optional(),
});

module.exports = updateTaskSchema;
