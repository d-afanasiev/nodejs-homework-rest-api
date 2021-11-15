const contacts = require("../../model/contacts.json");

const getContactById = async (contactId) => {
  const searchContact = contacts.find(({ id }) => id === contactId);
  return searchContact;
};

module.exports = getContactById;
