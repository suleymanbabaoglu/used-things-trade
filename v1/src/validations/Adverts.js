const Joi = require("joi");

const createValidation = Joi.object({
  Brand: Joi.required(),
  Model: Joi.required(),
  Price: Joi.number(),
  Kilometer: Joi.number(),
  FirstRegistration: Joi.date(),
  Type: Joi.required(),
  Warranty: Joi.boolean(),
  Status: Joi.required(),
  Advertiser: Joi.boolean().required(),
  HorsePower: Joi.number(),
  Kilowatts: Joi.number(),
  Fuel: Joi.required(),
  Transmission: Joi.required(),
  Drive: Joi.number(),
  Color: Joi.required(),
  Doors: Joi.number(),
  Seats: Joi.number(),
  Country: Joi.required(),
  State: Joi.required(),
  City: Joi.required(),
});

const updateValidation = Joi.object({
  Brand: Joi.required(),
  Model: Joi.required(),
  Price: Joi.number(),
  Kilometer: Joi.number(),
  FirstRegistration: Joi.date(),
  Type: Joi.required(),
  Warranty: Joi.boolean(),
  Status: Joi.required(),
  Advertiser: Joi.boolean(),
  HorsePower: Joi.number(),
  Kilowatts: Joi.number(),
  Fuel: Joi.required(),
  Transmission: Joi.required(),
  Drive: Joi.number(),
  Color: Joi.required(),
  Doors: Joi.number(),
  Seats: Joi.number(),
  Country: Joi.required(),
  State: Joi.required(),
  City: Joi.required(),
});

module.exports = {
  createValidation,
  updateValidation,
};
