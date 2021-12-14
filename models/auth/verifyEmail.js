const { User } = require("../../db/authModel");
const { NotFound, BadRequest } = require("http-errors");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const verifyEmail = async (email) => {
  const validUser = await User.findOne({ email });

  if (!validUser) {
    throw new NotFound("User not found");
  }

  if (validUser.verify) {
    throw new BadRequest("Verification has already been passed");
  }

  const msg = {
    to: email,
    from: "afanasiev.dimon@outlook.com",
    subject: "Thank you for registration!",
    text: `Please, confirm your email address POST http://localhost:${process.env.PORT}/api/users/verify/${validUser.verificationToken}`,
    html: `Please, confirm your email address POST http://localhost:${process.env.PORT}/api/users/verify/${validUser.verificationToken}`,
  };
  await sgMail.send(msg);
};

module.exports = verifyEmail;
