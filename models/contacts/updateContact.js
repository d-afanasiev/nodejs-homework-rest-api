const { Contacts } = require("../../db/contactModel");

const updateContact = async (contactId, body, owner) => {
  const getContactById = await Contacts.findOneAndUpdate(
    { _id: contactId, owner },
    { ...body },
    { new: true }
  );
  return getContactById;
};

module.exports = updateContact;
