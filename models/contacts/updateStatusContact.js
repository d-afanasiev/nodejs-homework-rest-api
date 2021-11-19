const { Contacts } = require("../../db/contactModel");

const updateStatusContact = async (contactId, { favorite }) => {
  try {
    await Contacts.findByIdAndUpdate(contactId, {
      $set: { favorite },
    });
    const getContactById = await Contacts.findById(contactId);
    return getContactById;
  } catch (error) {
    return null;
  }
};

module.exports = updateStatusContact;
