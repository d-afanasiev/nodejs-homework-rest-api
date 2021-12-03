const { getListContacts } = require("../../models/contacts");

const getListContactsControllers = async (req, res, next) => {
  const { _id } = req.user;
  const { page, limit, favorite } = req.query;
  const contacts = await getListContacts(_id, page, limit, favorite);
  return res.status(200).json(contacts);
};

module.exports = getListContactsControllers;
