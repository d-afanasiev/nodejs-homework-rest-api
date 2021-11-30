const express = require("express");
const router = express.Router();
const {
  ctrlWrapper,
  validation,
  logoutMiddlewares,
  currentUserMiddlewares,
} = require("../../middlewares");
const { auth, schemaSubscription } = require("../../schemas");

const {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateSubscriptionController,
} = require("../../controllers/auth");

router.patch(
  "/:contactId",
  validation(schemaSubscription),
  updateSubscriptionController
);

router.post(
  "/signup",
  validation(auth.schema),
  ctrlWrapper(registrationController)
);

router.post("/login", validation(auth.schema), ctrlWrapper(loginController));

router.post("/logout", logoutMiddlewares, logoutController);

router.post("/current", currentUserMiddlewares, currentUserController);

module.exports = router;
