const { Contacts } = require("../../db/contactModel");

const getContactById = async (contactId) => {
  try {
    const searchContact = await Contacts.findById(contactId);
    return searchContact;
  } catch (error) {
    return null;
  }
};

module.exports = getContactById;
