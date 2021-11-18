const { updateContact } = require("../../models/contacts");

const renewContact = async (req, res, next) => {
  const id = req.params.contactId;
  const bodyContact = req.body;

  if (Object.keys(bodyContact).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }
  const newContact = await updateContact(id, bodyContact);

  if (!newContact) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.status(200).json(newContact);
};

module.exports = renewContact;
