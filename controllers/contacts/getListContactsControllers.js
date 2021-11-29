const { getListContacts } = require("../../models/contacts");

const getListContactsControllers = async (req, res, next) => {
  const { _id } = req.user;
  const { page, limit } = req.query;
  // console.log(query);
  const contacts = await getListContacts(_id, page, limit);
  return res.status(200).json(contacts);
};

module.exports = getListContactsControllers;
