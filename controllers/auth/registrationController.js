const { registration } = require("../../models/auth");

const registrationController = async (req, res) => {
  const user = await registration(req.body);
  return res.json(user);
};

module.exports = registrationController;
