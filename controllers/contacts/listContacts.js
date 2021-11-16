const contacts = require("../../model/contacts.json");

const listContacts = async () => {
  const allContacts = await contacts;
  return allContacts;
};

module.exports = listContacts;
