const { removeContact } = require("../../models/contacts");

const deleteContactController = async (req, res, next) => {
  const id = req.params.contactId;
  const { _id } = req.user;
  const deleteContact = await removeContact(id, _id);
  if (!deleteContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ message: "contact deleted" });
};

module.exports = deleteContactController;
