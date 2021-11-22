const updateContact = require("./updateContact");
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const getContactById = require("./getContactById");
const getListContacts = require("./getListContacts");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
