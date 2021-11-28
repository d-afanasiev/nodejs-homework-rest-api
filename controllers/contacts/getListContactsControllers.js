const { getListContacts } = require("../../models/contacts");

const getListContactsControllers = async (req, res, next) => {
  const { _id } = req.user;
  const contacts = await getListContacts(_id);
  return res.status(200).json(contacts);
};

module.exports = getListContactsControllers;
