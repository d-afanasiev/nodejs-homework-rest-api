const { Contacts } = require("../../db/contactModel");

const getListContacts = async (owner, page = 1, limit = 10, favorite) => {
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };
  if (!favorite) {
    const allContacts = await Contacts.paginate({ owner }, options);
    return allContacts;
  } else {
    const allContacts = await Contacts.paginate({ owner, favorite }, options);
    return allContacts;
  }
};

module.exports = getListContacts;
