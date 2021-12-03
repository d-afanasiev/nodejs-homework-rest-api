const { User } = require("../../db/authModel");
const gravatar = require("gravatar");

const registration = async (body) => {
  const { password, email, subscription, token } = body;
  const avatarURL = gravatar.url(email, { s: "100", r: "x", d: "retro" }, true);
  const newUser = new User({ email, subscription, token, avatarURL });
  newUser.setPassword(password);
  await newUser.save();
  return newUser;
};

module.exports = registration;
