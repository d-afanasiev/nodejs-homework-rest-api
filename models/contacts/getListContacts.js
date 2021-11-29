const { Contacts } = require("../../db/contactModel");

const getListContacts = async (userId, page, limit) => {
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };
  const allContacts = await Contacts.paginate({ userId }, options);
  return allContacts;
};

module.exports = getListContacts;
