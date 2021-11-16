const fs = require("fs/promises");
const contacts = require("../../model/contacts.json");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.resolve("");

const addContact = async (body) => {
  const currentContact = { id: uuidv4(), ...body };
  const contact = [...contacts, currentContact];
  await fs.writeFile(
    `${contactsPath}/model/contacts.json`,
    JSON.stringify(contact),
    (err) => {
      if (err) throw err;
    }
  );
  return currentContact;
};

module.exports = addContact;
