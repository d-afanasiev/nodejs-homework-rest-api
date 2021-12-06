const fs = require("fs").promises;
const path = require("path");
const Jimp = require("jimp");
const { updateAvatar } = require("../../models/auth");

const avatarController = async (req, res) => {
  const NEW_FILE_DIR = path.resolve("./public/avatars");
  const id = req.params.contactId;
  const { path: temporaryName, originalname } = req.file;
  const fileName = path.join(NEW_FILE_DIR, originalname);
  try {
    const changeImage = await Jimp.read(temporaryName);
    await changeImage.resize(250, 250).quality(60).write(temporaryName);
    await fs.rename(temporaryName, fileName);
    await updateAvatar(id, originalname);
  } catch (err) {
    await fs.unlink(temporaryName);
    return next(err);
  }
  res.json({ avatarURL: `http://localhost:3000/avatars/${originalname}` });
};

module.exports = avatarController;
