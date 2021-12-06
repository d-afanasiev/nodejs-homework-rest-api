const express = require("express");
const router = express.Router();

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const FILE_DIR = path.resolve("./tmp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split(".");
    cb(null, `${uuidv4()}.${extension}`);
  },
});

const upload = multer({ storage });

const {
  ctrlWrapper,
  validation,
  authMiddlewares,
  uploadMiddleware,
} = require("../../middlewares");
const { auth, schemaSubscription } = require("../../schemas");

const {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateSubscriptionController,
  avatarController,
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

router.patch(
  "/avatars/:contactId",
  authMiddlewares,
  upload.single("avatarURL"),
  ctrlWrapper(avatarController)
);

module.exports = router;
