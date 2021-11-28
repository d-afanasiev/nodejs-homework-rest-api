const { getListContacts } = require("../../models/contacts");

const getListContactsControllers = async (req, res, next) => {
  console.log({ token: req.token, user: req.user });
  const contacts = await getListContacts();
  return res.status(200).json(contacts);
};

module.exports = getListContactsControllers;
