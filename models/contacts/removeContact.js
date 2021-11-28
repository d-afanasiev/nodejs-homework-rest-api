const { Contacts } = require("../../db/contactModel");

const removeContact = async (contactId, userId) => {
  try {
    const deleteContact = await Contacts.findOneAndRemove({
      _id: contactId,
      userId,
    });
    return deleteContact;
  } catch (error) {
    return null;
  }
};

module.exports = removeContact;
