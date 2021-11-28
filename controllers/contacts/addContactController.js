const { addContact } = require("../../models/contacts");

const addContactController = async (req, res, next) => {
  const { _id } = req.user;
  const writeContact = await addContact(req.body, _id);
  return res.status(201).json(writeContact);
};

module.exports = addContactController;
