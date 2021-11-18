const { Contacts } = require("../../db/contactModel");

const updateStatusContact = async (contactId, { favorite }) => {
  try {
    const updateContact = await Contacts.findByIdAndUpdate(contactId, {
      $set: { favorite },
    });
    return updateContact;
  } catch (error) {
    return null;
  }
};

module.exports = updateStatusContact;
