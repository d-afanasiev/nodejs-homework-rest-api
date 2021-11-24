const { Contacts } = require("../../db/contactModel");

const updateContact = async (contactId, body) => {
  const getContactById = await Contacts.findByIdAndUpdate(
    contactId,
    { ...body },
    { new: true }
  );
  return getContactById;
};

module.exports = updateContact;
