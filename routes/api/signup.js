const express = require("express");
const router = express.Router();
const {
  ctrlWrapper,
  validation,
  authMiddlewares,
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

router.post("/logout", authMiddlewares, logoutController);

router.get("/current", authMiddlewares, currentUserController);

module.exports = router;
