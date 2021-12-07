const { User } = require("../../db/authModel");
const fs = require("fs").promises;
const Jimp = require("jimp");

const updateAvatar = async (id, newName, temporaryName, fileName) => {
  const changeImage = await Jimp.read(temporaryName);
  await changeImage.resize(250, 250).quality(60).write(temporaryName);
  await fs.rename(temporaryName, fileName);
  await User.findByIdAndUpdate(id, {
    avatarURL: `/avatars/${newName}`,
  });
};

module.exports = updateAvatar;
