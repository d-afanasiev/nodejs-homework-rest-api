const { Contacts } = require("../../db/contactModel");

const updateContact = async (contactId, body) => {
  await Contacts.findByIdAndUpdate(contactId, {
    $set: { ...body },
  });
  const getContactById = await Contacts.findById(contactId);
  return getContactById;
};

module.exports = updateContact;
