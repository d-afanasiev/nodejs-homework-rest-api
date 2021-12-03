const validation = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const authMiddlewares = require("./auth");

module.exports = {
  ctrlWrapper,
  validation,
  authMiddlewares,
};
