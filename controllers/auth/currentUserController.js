const currentUserController = (req, res) => {
  const { email, subscription } = req.user[0];
  return res.status(200).json({ email, subscription });
};

module.exports = currentUserController;
