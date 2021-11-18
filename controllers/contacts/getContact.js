const { getContactById } = require("../../models/contacts");

const getContact = async (req, res, next) => {
  const id = req.params.contactId;

  const contact = await getContactById(id);
  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(contact);
};

module.exports = getContact;
