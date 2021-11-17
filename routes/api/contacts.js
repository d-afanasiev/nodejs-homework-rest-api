const express = require("express");
const router = express.Router();
const {
  addContactValidation,
  patchContactValidation,
} = require("../../middlewares/validationMidleware");

const {
  getListContacts,
  getContact,
  addContactToFile,
  deleteContact,
  renewContact,
} = require("../../controllers/contacts");

router.get("/", getListContacts);

router.get("/:contactId", getContact);

router.post("/", addContactValidation, addContactToFile);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", patchContactValidation, renewContact);

module.exports = router;
