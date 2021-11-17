const { listContacts } = require("../../models/contacts");

const getListContacts = async (req, res, next) => {
  const contacts = await listContacts();
  return res.status(200).json(contacts);
};

module.exports = getListContacts;
