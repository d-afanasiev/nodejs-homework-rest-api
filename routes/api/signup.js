const express = require("express");
const router = express.Router();
const { ctrlWrapper, validation } = require("../../middlewares");
const { auth } = require("../../schemas");

const {
  registrationController,
  loginController,
} = require("../../controllers/auth");

router.post(
  "/signup",
  validation(auth.schema),
  ctrlWrapper(registrationController)
);

router.post("/login", validation(auth.schema), ctrlWrapper(loginController));

module.exports = router;
