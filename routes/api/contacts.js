const express = require("express");
const router = express.Router();
const {
  addContactValidation,
  putContactValidation,
  patchContactValidation,
} = require("../../middlewares/validationMidleware");

const {
  getListContactsControllers,
  getContact,
  addContactToFile,
  deleteContact,
  renewContact,
  renewStatusContact,
} = require("../../controllers/contacts");

router.get("/", getListContactsControllers);

router.get("/:contactId", getContact);

router.post("/", addContactValidation, addContactToFile);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", putContactValidation, renewContact);

router.patch(
  "/:contactId/favorite",
  patchContactValidation,
  renewStatusContact
);

module.exports = router;
