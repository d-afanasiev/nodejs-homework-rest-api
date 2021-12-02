const { Contacts } = require("../../db/contactModel");

const getContactById = async (contactId, owner) => {
  const searchContact = await Contacts.findOne({ _id: contactId, owner });
  return searchContact;
};

module.exports = getContactById;
