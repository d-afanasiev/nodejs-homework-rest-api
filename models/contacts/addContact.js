const { Contacts } = require("../../db/contactModel");

const addContact = async (body, userId) => {
  const contact = new Contacts({ ...body, userId });
  await contact.save();
  return contact;
};

module.exports = addContact;
