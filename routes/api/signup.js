const express = require("express");
const router = express.Router();
const {
  ctrlWrapper,
  validation,
  logoutMiddlewares,
  currentUserMiddlewares,
} = require("../../middlewares");
const { auth } = require("../../schemas");

const {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
} = require("../../controllers/auth");

router.post(
  "/signup",
  validation(auth.schema),
  ctrlWrapper(registrationController)
);

router.post("/login", validation(auth.schema), ctrlWrapper(loginController));

router.post("/logout", logoutMiddlewares, logoutController);

router.post("/current", currentUserMiddlewares, currentUserController);

module.exports = router;
