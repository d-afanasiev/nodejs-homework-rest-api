const { User } = require("../../db/authModel");

const updateAvatar = async (id, originalname) => {
  await User.findByIdAndUpdate(id, {
    avatarURL: `http://localhost:3000/avatars/${originalname}`,
  });
};

module.exports = updateAvatar;
