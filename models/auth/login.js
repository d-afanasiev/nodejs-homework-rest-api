const bCrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../db/authModel");

const login = async (body) => {
  const { password, email, subscription, token } = body;
  const user = User.findOne({ email });
  if (await bCrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        _id: user._id,
        subscription: user.subscription,
      },
      process.env.JWT_SECRET
    );
  }
  return token;
};

module.exports = login;
