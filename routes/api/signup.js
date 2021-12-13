const express = require("express");
const router = express.Router();

const {
  ctrlWrapper,
  validation,
  authMiddlewares,
  uploadMiddleware,
} = require("../../middlewares");
const { auth, schemaSubscription, verify } = require("../../schemas");

const {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateSubscriptionController,
  avatarController,
  verificationTokenController,
  verifyEmailController,
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

router.get(
  "/verify/:verificationToken",
  ctrlWrapper(verificationTokenController)
);

router.post(
  "/verify",
  validation(verify.email),
  ctrlWrapper(verifyEmailController)
);

router.patch(
  "/avatars/:contactId",
  authMiddlewares,
  uploadMiddleware.single("avatarURL"),
  ctrlWrapper(avatarController)
);

module.exports = router;
