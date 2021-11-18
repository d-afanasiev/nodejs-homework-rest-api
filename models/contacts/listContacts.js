const { Contacts } = require("../../db/contactModel");

const listContacts = async () => {
  const allContacts = await Contacts.find({});
  return allContacts;
};

module.exports = listContacts;
