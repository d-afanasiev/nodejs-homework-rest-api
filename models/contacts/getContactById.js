const { Contacts } = require("../../db/contactModel");

const getContactById = async (contactId, userId) => {
  const searchContact = await Contacts.findOne({ _id: contactId, userId });
  return searchContact;
};

module.exports = getContactById;
