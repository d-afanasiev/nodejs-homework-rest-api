const { verifyEmail } = require("../../models/auth");

const verifyEmailController = async (req, res) => {
  const { email } = req.body;
  await verifyEmail(email);
  return res.status(200).json({ message: "Verification email sent" });
};

module.exports = verifyEmailController;
