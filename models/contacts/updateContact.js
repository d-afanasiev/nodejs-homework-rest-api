const { Contacts } = require("../../db/contactModel");

const updateContact = async (contactId, body, userId) => {
  const getContactById = await Contacts.findOneAndUpdate(
    { _id: contactId, userId },
    { ...body },
    { new: true }
  );
  return getContactById;
};

module.exports = updateContact;
