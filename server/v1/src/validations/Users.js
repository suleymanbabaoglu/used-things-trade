const Joi = require("joi");

const createValidation = Joi.object({
  FirstName: Joi.string().required().min(3),
  LastName: Joi.string().required().min(3),
  Password: Joi.string().required().min(8),
  Email: Joi.string().email().required().min(3),
  Phone: Joi.number().required().min(3),
});

const updateValidation = Joi.object({
  _id: Joi.string(),
  FirstName: Joi.string().min(3),
  LastName: Joi.string().min(3),
  Password: Joi.string().min(8),
  Email: Joi.string().email().min(3),
  Phone: Joi.number().min(3),
  PostalCode: Joi.number().min(1),
  Address: Joi.string().min(5),
  Country: Joi.string().min(3),
  BirthDate: Joi.string(),
  Gender: Joi.bool(),
  ProfileType: Joi.bool(),
  createdAt: Joi.string(),
  updatedAt: Joi.string(),
});

const loginValidation = Joi.object({
  password: Joi.string().required().min(8),
  email: Joi.string().email().required().min(3),
});

const resetPasswordValidation = Joi.object({
  email: Joi.string().email().required().min(3),
});

const changePasswordValidation = Joi.object({
  password: Joi.string().required().min(3),
});

module.exports = {
  createValidation,
  updateValidation,
  loginValidation,
  resetPasswordValidation,
  changePasswordValidation,
};
