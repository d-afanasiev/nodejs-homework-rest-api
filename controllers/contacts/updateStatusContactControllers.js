const { updateStatusContact } = require("../../models/contacts");

const updateStatusContactControllers = async (req, res, next) => {
  const { _id } = req.user;
  const id = req.params.contactId;
  const bodyContact = req.body;

  const newContact = await updateStatusContact(id, bodyContact, _id);

  return res.status(200).json(newContact);
};

module.exports = updateStatusContactControllers;
