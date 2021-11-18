const express = require("express");
const router = express.Router();
const {
  addContactValidation,
  putContactValidation,
  patchContactValidation,
} = require("../../middlewares/validationMidleware");

const {
  getListContacts,
  getContact,
  addContactToFile,
  deleteContact,
  renewContact,
  renewStatusContact,
} = require("../../controllers/contacts");

router.get("/", getListContacts);

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
