const { User } = require("../../db/authModel");
const { NotFound } = require("http-errors");

const verificationToken = async (verificationToken) => {
  const validUser = await User.findOne({ verificationToken });
  if (!validUser) {
    throw new NotFound("User not found");
  }

  await User.findOneAndUpdate(
    { verificationToken },
    {
      verificationToken: null,
      verify: true,
    }
  );
};

module.exports = verificationToken;
