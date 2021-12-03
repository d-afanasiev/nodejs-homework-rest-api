const { User } = require("../../db/authModel");

const logoutUser = async (id) => {
  await User.findByIdAndUpdate(id, { token: null });
};

module.exports = logoutUser;
