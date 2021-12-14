const registrationController = require("./registrationController");
const loginController = require("./loginController");
const logoutController = require("./logoutController");
const currentUserController = require("./currentUserController");
const updateSubscriptionController = require("./updateSubscriptionController");
const avatarController = require("./avatarController");
const verificationTokenController = require("./verificationTokenController");
const verifyEmailController = require("./verifyEmailController");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateSubscriptionController,
  avatarController,
  verificationTokenController,
  verifyEmailController,
};
