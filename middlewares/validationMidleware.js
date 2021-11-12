const Joi = require("joi");

module.exports = {
  addContactValidation: async (req, res, next) => {
    const schema = await Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      phone: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
    });

    const validationResult = await schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details });
    }

    next();
  },
};
