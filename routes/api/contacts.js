const express = require("express");
const router = express.Router();
const {
  ctrlWrapper,
  validation,
  authMiddlewares,
} = require("../../middlewares");
const { schema } = require("../../schemas");

const {
  getListContactsControllers,
  getContactByIdController,
  addContactController,
  deleteContactController,
  updateContactControllers,
  updateStatusContactControllers,
} = require("../../controllers/contacts");

router.use("/", authMiddlewares);

router.get("/", ctrlWrapper(getListContactsControllers));

router.get("/:contactId", ctrlWrapper(getContactByIdController));

router.post(
  "/",
  validation(schema.addSchema),
  ctrlWrapper(addContactController)
);

router.delete("/:contactId", ctrlWrapper(deleteContactController));

router.put(
  "/:contactId",
  validation(schema.putSchema),
  ctrlWrapper(updateContactControllers)
);

router.patch(
  "/:contactId/favorite",
  validation(schema.patchSchema),
  ctrlWrapper(updateStatusContactControllers)
);

module.exports = router;
