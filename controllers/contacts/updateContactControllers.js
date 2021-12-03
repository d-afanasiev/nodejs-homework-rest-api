const { updateContact } = require("../../models/contacts");

const updateContactControllers = async (req, res, next) => {
  const { _id } = req.user;
  const id = req.params.contactId;
  const bodyContact = req.body;

  if (Object.keys(bodyContact).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }

  const newContact = await updateContact(id, bodyContact, _id);

  if (!newContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(newContact);
};

module.exports = updateContactControllers;
