const login = require("./login");
const registration = require("./registration");
const updateSubscription = require("./updateSubscription");
const logoutUser = require("./logoutUser");
const updateAvatar = require("./updateAvatar");
const verificationToken = require("./verificationToken");
const verifyEmail = require("./verifyEmail");

module.exports = {
  login,
  registration,
  updateSubscription,
  logoutUser,
  updateAvatar,
  verificationToken,
  verifyEmail,
};
