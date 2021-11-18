const getListContacts = require("./getListContacts");
const getContact = require("./getContact");
const addContactToFile = require("./addContactToFile");
const deleteContact = require("./deleteContact");
const renewContact = require("./renewContact");
const renewStatusContact = require("./renewStatusContact");

module.exports = {
  getListContacts,
  getContact,
  addContactToFile,
  deleteContact,
  renewContact,
  renewStatusContact,
};
