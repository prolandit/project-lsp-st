const Joi = require("joi");
const Boom = require("boom");

const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().description("Active email"),
    fullName: Joi.string().required().description("Person's full name"),
    password: Joi.string()
      .min(6)
      .max(20)
      .required()
      .description("Should be between 6-20 characters"),
    passwordConfirmation: Joi.string()
      .min(6)
      .max(20)
      .required()
      .valid(Joi.ref("password"))
      .description("Should match password"),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().description("Active email"),
    password: Joi.string()
      .min(6)
      .max(20)
      .required()
      .description("Should be between 6-20 characters"),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const changePassValidation = (data) => {
  const schema = Joi.object({
    oldPassword: Joi.string().required().description("Old Password"),
    newPassword: Joi.string().min(6).required().description("Should be between 6-20 characters"),
    newPasswordConfirmation: Joi.string()
      .min(6)
      .valid(Joi.ref("newPassword"))
      .required()
      .description("Confirm password must match password"),
    dataToken: Joi.object().required(),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

module.exports = {
  registerValidation,
  loginValidation,
  changePassValidation,
};
