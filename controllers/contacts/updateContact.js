const fs = require("fs/promises");
const contacts = require("../../model/contacts.json");
const path = require("path");

const contactsPath = path.resolve("");

const updateContact = async (contactId, body) => {
  const changeContact = contacts.map((element) => {
    if (element.id === contactId) {
      element = { ...element, ...body };
    }
    return element;
  });
  await fs.writeFile(
    `${contactsPath}/model/contacts.json`,
    JSON.stringify(changeContact),
    (err) => {
      if (err) throw err;
    }
  );
  return changeContact;
};

module.exports = updateContact;
