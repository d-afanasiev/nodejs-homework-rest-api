const validation = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const authMiddlewares = require("./auth");
const logoutMiddlewares = require("./logout");
const currentUserMiddlewares = require("./currentUser");

module.exports = {
  ctrlWrapper,
  validation,
  authMiddlewares,
  logoutMiddlewares,
  currentUserMiddlewares,
};
