const { updateStatusContact } = require("../../models/contacts");

const renewFavoriteContact = async (req, res, next) => {
  const id = req.params.contactId;
  const bodyContact = req.body;

  const newContact = await updateStatusContact(id, bodyContact);

  return res.status(200).json(newContact);
};

module.exports = renewFavoriteContact;
