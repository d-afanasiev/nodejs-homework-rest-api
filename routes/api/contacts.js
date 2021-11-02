const express = require("express");
const router = express.Router();
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
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

router.post("/", async (req, res, next) => {
  const newContact = await req.body;
  if (
    newContact.name === "" ||
    newContact.email === "" ||
    newContact.phone === ""
  ) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    const writeContact = await addContact(newContact);
    res.status(201).json(writeContact);
  }
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

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
