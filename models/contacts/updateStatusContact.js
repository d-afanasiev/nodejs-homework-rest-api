const { Contacts } = require("../../db/contactModel");

const updateStatusContact = async (contactId, { favorite }, userId) => {
  const getContactById = await Contacts.findOneAndUpdate(
    { _id: contactId, userId },
    { favorite },
    { new: true }
  );
  return getContactById;
};

module.exports = updateStatusContact;
