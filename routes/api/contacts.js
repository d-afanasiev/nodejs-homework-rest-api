const express = require("express");
const router = express.Router();
const {
  addContactValidation,
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
  const id = await parseInt(req.params.contactId);

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
  const id = await parseInt(req.params.contactId);
  const deleteContact = await removeContact(id);
  if (!deleteContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(deleteContact);
});

router.put("/:contactId", patchContactValidation, async (req, res, next) => {
  const id = await parseInt(req.params.contactId);
  const bodyContact = await req.body;
  // console.log(Object.keys(bodyContact).length);
  if (Object.keys(bodyContact).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }
  const newContact = await updateContact(id, bodyContact);
  return res.status(200).json(newContact);
});

module.exports = router;
