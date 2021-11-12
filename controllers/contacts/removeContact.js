const fs = require("fs/promises");
const contacts = require("../../model/contacts.json");
const path = require("path");

const contactsPath = path.resolve("");

const removeContact = async (contactId) => {
  const findContact = await contacts.find(({ id }) => id === contactId);
  if (!findContact) {
    return false;
  }

  const filterContact = await contacts.filter(({ id }) => contactId !== id);
  fs.writeFile(
    `${contactsPath}/model/contacts.json`,
    JSON.stringify(filterContact),
    (err) => {
      if (err) throw err;
    }
  );
  return filterContact;
};

module.exports = removeContact;
