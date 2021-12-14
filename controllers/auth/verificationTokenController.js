const { verificationToken } = require("../../models/auth");

const verificationTokenController = async (req, res) => {
  await verificationToken(req.params.verificationToken);
  return res.status(200).json({ message: "Verification successful" });
};

module.exports = verificationTokenController;
