const fs = require("fs").promises;
const path = require("path");
const { updateAvatar } = require("../../models/auth");

const avatarController = async (req, res) => {
  const NEW_FILE_DIR = path.resolve("./public/avatars");
  const id = req.params.contactId;
  const { path: temporaryName, originalname } = req.file;
  const newName = `${id}_${originalname}`;
  const fileName = path.join(NEW_FILE_DIR, newName);
  try {
    await updateAvatar(id, newName, temporaryName, fileName);
  } catch (err) {
    await fs.unlink(temporaryName);
    return next(err);
  }
  res.json({
    avatarURL: `/avatars/${newName}`,
  });
};

module.exports = avatarController;
