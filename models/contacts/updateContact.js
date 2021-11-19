const { Contacts } = require("../../db/contactModel");

const updateContact = async (contactId, body) => {
  try {
    await Contacts.findByIdAndUpdate(contactId, {
      $set: { ...body },
    });
    const getContactById = await Contacts.findById(contactId);
    return getContactById;
  } catch (error) {
    return null;
  }
};

module.exports = updateContact;
