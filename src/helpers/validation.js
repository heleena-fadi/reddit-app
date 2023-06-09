const Joi = require("joi");
require("dotenv").config();

const validateSignup = (body) => {
  const schema = Joi.object({
    username: Joi.string()
      .pattern(/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
      .required(),
    password: Joi
    .string()
    .min(5)
    .max(30)
    .required(),
    email: Joi.string().email().max(256).required(),
    gender: Joi.string().allow(null),
    user_image: Joi.string().allow(null)

  });

  return schema.validateAsync(body);
};

const validateSignin = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().max(256).required(),
    password: Joi.string()
    .min(5)
    .max(30)
    .required(),
  });
  return schema.validateAsync(body);
};

module.exports = {
  validateSignup,
  validateSignin,
};