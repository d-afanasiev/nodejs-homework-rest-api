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
} = require("../../model/index");

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
});

router.get("/:contactId", async (req, res, next) => {
  const id = await parseInt(req.params.contactId);

  const contact = await getContactById(id);
  if (!contact) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.status(200).json(contact);
  }
});

router.post("/", addContactValidation, async (req, res, next) => {
  const writeContact = await addContact(req.body);
  res.status(201).json(writeContact);
});

router.delete("/:contactId", async (req, res, next) => {
  const id = await parseInt(req.params.contactId);
  const deleteContact = await removeContact(id);
  if (!deleteContact) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.status(200).json(deleteContact);
  }
});

router.put("/:contactId", async (req, res, next) => {
  const id = await parseInt(req.params.contactId);
  const bodyContact = await req.body;
  // console.log(Object.keys(bodyContact).length);
  if (Object.keys(bodyContact).length === 0) {
    res.status(400).json({ message: "missing fields" });
  } else {
    const newContact = await updateContact(id, bodyContact);
    res.status(200).json(newContact);
  }
});

module.exports = router;
