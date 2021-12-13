const { User } = require("../../db/authModel");
const gravatar = require("gravatar");
const sha256 = require("sha256");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const registration = async (body) => {
  const { password, email, subscription, token } = body;
  const verificationToken = sha256(email + process.env.JWT_SECRET);
  const avatarURL = gravatar.url(email, { s: "100", r: "x", d: "retro" }, true);
  const newUser = new User({
    email,
    subscription,
    token,
    avatarURL,
    verificationToken,
  });
  newUser.setPassword(password);
  await newUser.save();

  const msg = {
    to: email,
    from: "afanasiev.dimon@outlook.com",
    subject: "Thank you for registration!",
    text: `Please, confirm your email address POST http://localhost:${process.env.PORT}/api/users/verify/${verificationToken}`,
    html: `Please, confirm your email address POST http://localhost:${process.env.PORT}/api/users/verify/${verificationToken}`,
  };
  await sgMail.send(msg);

  return newUser;
};

module.exports = registration;
