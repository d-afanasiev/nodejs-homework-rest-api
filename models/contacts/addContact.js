const { Contacts } = require("../../db/contactModel");

const addContact = async (body) => {
  try {
    const contact = new Contacts({ ...body });
    await contact.save();
    return contact;
  } catch (error) {
    return error.message;
  }
};

module.exports = addContact;
