const { updateContact } = require("../../models/contacts");

const updateContactControllers = async (req, res, next) => {
  const id = req.params.contactId;
  const bodyContact = req.body;

  const newContact = await updateContact(id, bodyContact);

  return res.status(200).json(newContact);
};

module.exports = updateContactControllers;
