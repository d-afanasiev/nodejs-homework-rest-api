const { Contacts } = require("../../db/contactModel");

const removeContact = async (contactId, owner) => {
  try {
    const deleteContact = await Contacts.findOneAndRemove({
      _id: contactId,
      owner,
    });
    return deleteContact;
  } catch (error) {
    return null;
  }
};

module.exports = removeContact;
