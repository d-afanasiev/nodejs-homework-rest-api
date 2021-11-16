const express = require("express");
const router = express.Router();
const {
  addContactValidation,
  patchContactValidation,
} = require("../../middlewares/validationMidleware");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../controllers/contacts");

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  return res.status(200).json(contacts);
});

router.get("/:contactId", async (req, res, next) => {
  const id = parseInt(req.params.contactId);

  const contact = await getContactById(id);
  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(contact);
});

router.post("/", addContactValidation, async (req, res, next) => {
  const writeContact = await addContact(req.body);
  return res.status(201).json(writeContact);
});

router.delete("/:contactId", async (req, res, next) => {
  const id = parseInt(req.params.contactId);
  const deleteContact = await removeContact(id);
  if (!deleteContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ message: "contact deleted" });
});

router.put("/:contactId", patchContactValidation, async (req, res, next) => {
  const id = parseInt(req.params.contactId);
  const bodyContact = req.body;

  if (Object.keys(bodyContact).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }
  const newContact = await updateContact(id, bodyContact);

  if (!newContact) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.status(200).json(newContact);
});

module.exports = router;
