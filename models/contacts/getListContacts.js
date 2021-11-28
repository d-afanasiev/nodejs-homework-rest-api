const { Contacts } = require("../../db/contactModel");

const getListContacts = async (userId) => {
  const allContacts = await Contacts.find({ userId });
  return allContacts;
};

module.exports = getListContacts;
