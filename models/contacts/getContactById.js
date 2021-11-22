const { Contacts } = require("../../db/contactModel");

const getContactById = async (contactId) => {
  const searchContact = await Contacts.findById(contactId);
  return searchContact;
};

module.exports = getContactById;
