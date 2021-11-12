const updateContact = require("./updateContact");
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const getContactById = require("./getContactById");
const listContacts = require("./listContacts");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
