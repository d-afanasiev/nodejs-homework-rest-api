const { Contacts } = require("../../db/contactModel");

const updateStatusContact = async (contactId, { favorite }) => {
  await Contacts.findByIdAndUpdate(contactId, {
    $set: { favorite },
  });
  const getContactById = await Contacts.findById(contactId);
  return getContactById;
};

module.exports = updateStatusContact;
