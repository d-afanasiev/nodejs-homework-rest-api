const { Contacts } = require("../../db/contactModel");

const updateStatusContact = async (contactId, { favorite }, owner) => {
  const getContactById = await Contacts.findOneAndUpdate(
    { _id: contactId, owner },
    { favorite },
    { new: true }
  );
  return getContactById;
};

module.exports = updateStatusContact;
