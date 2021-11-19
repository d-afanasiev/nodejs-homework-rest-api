const { updateStatusContact } = require("../../models/contacts");

const renewFavoriteContact = async (req, res, next) => {
  const id = req.params.contactId;
  const bodyContact = req.body;

  if (Object.keys(bodyContact).length === 0) {
    return res.status(400).json({ message: "missing field favorite" });
  }
  const newContact = await updateStatusContact(id, bodyContact);

  if (!newContact) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.status(200).json(newContact);
};

module.exports = renewFavoriteContact;
