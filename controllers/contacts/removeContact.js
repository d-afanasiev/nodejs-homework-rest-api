const fs = require("fs/promises");
const contacts = require("../../model/contacts.json");
const path = require("path");

const contactsPath = path.resolve("");

const removeContact = async (contactId) => {
  const findContact = contacts.find(({ id }) => id === contactId);
  if (!findContact) {
    return false;
  }

  const filterContact = contacts.filter(({ id }) => contactId !== id);
  await fs.writeFile(
    `${contactsPath}/model/contacts.json`,
    JSON.stringify(filterContact),
    (err) => {
      if (err) throw err;
    }
  );
  return filterContact;
};

module.exports = removeContact;
