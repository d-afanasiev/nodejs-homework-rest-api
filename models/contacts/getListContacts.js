const { Contacts } = require("../../db/contactModel");

const getListContacts = async (userId, page = 1, limit = 10, favorite) => {
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };
  if (!favorite) {
    const allContacts = await Contacts.paginate({ userId }, options);
    return allContacts;
  } else {
    const allContacts = await Contacts.paginate({ userId, favorite }, options);
    return allContacts;
  }
};

module.exports = getListContacts;
