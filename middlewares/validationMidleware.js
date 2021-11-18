const Joi = require("joi");

module.exports = {
  addContactValidation: async (req, res, next) => {
    const schema = await Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      phone: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
      favorite: Joi.boolean(),
    });

    const validationResult = await schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details });
    }

    next();
  },

  putContactValidation: async (req, res, next) => {
    const schema = await Joi.object({
      name: Joi.string().alphanum().min(3).max(30),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      phone: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/),
      favorite: Joi.boolean(),
    });

    const validationResult = await schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details });
    }

    next();
  },
  patchContactValidation: async (req, res, next) => {
    const schema = await Joi.object({
      favorite: Joi.boolean().required(),
    });

    const validationResult = await schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details });
    }

    next();
  },
};
