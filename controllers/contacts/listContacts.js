const contacts = require("../../model/contacts.json");

const listContacts = async () => {
  const allContacts = contacts;
  return allContacts;
};

module.exports = listContacts;
