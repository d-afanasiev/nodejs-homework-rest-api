const express = require("express");
const router = express.Router();
const { ctrlWrapper, validation } = require("../../middlewares");
const { schema } = require("../../schemas");

const {
  getListContactsControllers,
  getContact,
  addContactToFile,
  deleteContact,
  renewContact,
  renewStatusContact,
} = require("../../controllers/contacts");

router.get("/", ctrlWrapper(getListContactsControllers));

router.get("/:contactId", ctrlWrapper(getContact));

router.post("/", validation(schema.addSchema), ctrlWrapper(addContactToFile));

router.delete("/:contactId", ctrlWrapper(deleteContact));

router.put(
  "/:contactId",
  validation(schema.putSchema),
  ctrlWrapper(renewContact)
);

router.patch(
  "/:contactId/favorite",
  validation(schema.patchSchema),
  ctrlWrapper(renewStatusContact)
);

module.exports = router;
