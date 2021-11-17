const contacts = require("../../db/contacts.json");

const getContactById = async (contactId) => {
  const searchContact = contacts.find(({ id }) => id === contactId);
  return searchContact;
};

module.exports = getContactById;
