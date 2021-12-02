const { Contacts } = require("../../db/contactModel");

const addContact = async (body, owner) => {
  const contact = new Contacts({ ...body, owner });
  await contact.save();
  return contact;
};

module.exports = addContact;
