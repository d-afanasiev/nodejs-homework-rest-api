const express = require("express");
const router = express.Router();
const { ctrlWrapper, validation } = require("../../middlewares");

const {
  registrationController,
  loginController,
} = require("../../controllers/auth");

router.post("/signup", ctrlWrapper(registrationController));

router.post("/login", ctrlWrapper(loginController));

module.exports = router;
