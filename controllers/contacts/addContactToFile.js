const { addContact } = require("../../models/contacts");

const addContactToFile = async (req, res, next) => {
  const writeContact = await addContact(req.body);
  return res.status(201).json(writeContact);
};

module.exports = addContactToFile;
