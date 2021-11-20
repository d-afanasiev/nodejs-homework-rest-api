const { Contacts } = require("../../db/contactModel");

const getListContacts = async () => {
  const allContacts = await Contacts.find({});
  return allContacts;
};

module.exports = getListContacts;
