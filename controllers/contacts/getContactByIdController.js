const { getContactById } = require("../../models/contacts");

const getContactByIdController = async (req, res, next) => {
  const id = req.params.contactId;

  const contact = await getContactById(id);
  return res.status(200).json(contact);
};

module.exports = getContactByIdController;
