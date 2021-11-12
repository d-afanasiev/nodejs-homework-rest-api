const fs = require("fs/promises");
const contacts = require("./contacts.json");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.resolve("");

const listContacts = async () => {
  const allContacts = await contacts;
  return allContacts;
};

const getContactById = async (contactId) => {
  const searchContact = await contacts.find(({ id }) => id === contactId);
  return searchContact;
};

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

const addContact = async (body) => {
  const currentContact = { id: uuidv4(), ...body };
  const contact = [...contacts, currentContact];
  fs.writeFile(
    `${contactsPath}/model/contacts.json`,
    JSON.stringify(contact),
    (err) => {
      if (err) throw err;
    }
  );
  return contact;
};

const updateContact = async (contactId, body) => {
  const changeContact = await contacts.map((element) => {
    if (element.id === contactId) {
      element = { ...element, ...body };
    }
    return element;
  });
  fs.writeFile(
    `${contactsPath}/model/contacts.json`,
    JSON.stringify(changeContact),
    (err) => {
      if (err) throw err;
    }
  );
  return changeContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
