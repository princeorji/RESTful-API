const Joi = require('joi');

const shareTaskSchema = Joi.object({
  taskId: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
});

module.exports = shareTaskSchema;
