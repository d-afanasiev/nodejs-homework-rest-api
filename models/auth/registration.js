const { User } = require("../../db/authModel");

const registration = async (body) => {
  const { password, email, subscription, token } = body;
  const newUser = new User({ email, subscription, token });
  newUser.setPassword(password);
  await newUser.save();
  return newUser;
};

module.exports = registration;
