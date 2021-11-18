// const contacts = require("../../db/contacts.json");
const { Contacts } = require("../../db/contactModel");

const updateContact = async (contactId, body) => {
  try {
    const updateContact = await Contacts.findByIdAndUpdate(contactId, {
      $set: { ...body },
    });
    return updateContact;
  } catch (error) {
    return null;
  }
};

module.exports = updateContact;
