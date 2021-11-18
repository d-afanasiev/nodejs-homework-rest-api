const { Contacts } = require("../../db/contactModel");

const removeContact = async (contactId) => {
  try {
    const deleteContact = await Contacts.findByIdAndRemove(contactId);
    return deleteContact;
  } catch (error) {
    return null;
  }
};

module.exports = removeContact;
