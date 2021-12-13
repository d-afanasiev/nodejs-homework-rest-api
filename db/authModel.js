const { Schema, model } = require("mongoose");
const bCrypt = require("bcryptjs");

const authSchema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  avatarURL: String,
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
  token: {
    type: String,
    default: null,
  },
});

authSchema.methods.setPassword = function (password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

authSchema.methods.validPassword = function (password) {
  return bCrypt.compareSync(password, this.password);
};

const User = model("User", authSchema);

module.exports = { User };
