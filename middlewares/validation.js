const validation = (schema) => {
  return (req, res, next) => {
    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details });
    }

    next();
  };
};

module.exports = validation;
