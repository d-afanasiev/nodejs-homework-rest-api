const validation = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const authMiddlewares = require("./auth");
const uploadMiddleware = require("./uploadAvatar");

module.exports = {
  ctrlWrapper,
  validation,
  authMiddlewares,
  uploadMiddleware,
};
