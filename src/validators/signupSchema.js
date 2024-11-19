const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().min(4).optional(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
});

module.exports = signupSchema;
