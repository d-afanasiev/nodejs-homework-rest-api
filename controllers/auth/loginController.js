const { login } = require("../../models/auth");

const loginController = async (req, res) => {
  const user = await login(req.body);
  return res.json(user);
};

module.exports = loginController;
