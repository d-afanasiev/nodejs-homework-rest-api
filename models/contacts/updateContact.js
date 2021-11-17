const fs = require("fs/promises");
const contacts = require("../../db/contacts.json");
const path = require("path");

const contactsPath = path.resolve("");

const updateContact = async (contactId, body) => {
  const searchContact = contacts.find(({ id }) => id === contactId);
  if (!searchContact) {
    return false;
  }

  const updateContact = { ...searchContact, ...body };

  const updateContacts = contacts.map((contact) => {
    if (contact.id === contactId) {
      return { ...contact, ...updateContact };
    }
    return contact;
  });

  await fs.writeFile(
    `${contactsPath}/db/contacts.json`,
    JSON.stringify(updateContacts),
    (err) => {
      if (err) throw err;
    }
  );
  return updateContact;
};

module.exports = updateContact;
