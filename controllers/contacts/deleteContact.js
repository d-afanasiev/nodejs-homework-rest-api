const { removeContact } = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  const id = parseInt(req.params.contactId);
  const deleteContact = await removeContact(id);
  if (!deleteContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ message: "contact deleted" });
};

module.exports = deleteContact;
