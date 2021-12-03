const { login } = require("../../models/auth");

const loginController = async (req, res) => {
  const { user, token } = await login(req.body);
  return res.json({
    user: { email: user.email, subscription: user.subscription },
    token: token,
  });
};

module.exports = loginController;
