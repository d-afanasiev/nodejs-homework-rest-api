const { Contacts } = require("../../db/contactModel");

const updateStatusContact = async (contactId, { favorite }) => {
  const getContactById = await Contacts.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
  return getContactById;
};

module.exports = updateStatusContact;
