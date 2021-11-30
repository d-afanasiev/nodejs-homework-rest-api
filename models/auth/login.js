const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const { User } = require("../../db/authModel");

const login = async (body) => {
  const { password, email, subscription } = body;
  const user = await User.findOne({ email });

  if (!(await user.validPassword(password))) {
    throw new Unauthorized("Email or password is wrong");
  }

  const token = jwt.sign(
    {
      _id: user._id,
      subscription: user.subscription,
    },
    process.env.JWT_SECRET
  );

  await User.findByIdAndUpdate(user.id, { token });

  return { user, token };
};

module.exports = login;
