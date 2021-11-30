const Joi = require("joi");

const schemaSubscription = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

module.exports = schemaSubscription;
