const { logoutUser } = require("../../models/auth");

const logoutController = async (req, res) => {
  const { _id } = req.user;
  await logoutUser(_id);
  return res.status(204).json({});
};

module.exports = logoutController;
