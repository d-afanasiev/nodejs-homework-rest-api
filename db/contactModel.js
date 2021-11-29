const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
    unique: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
  },
  owner: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

contactSchema.plugin(mongoosePaginate);

const Contacts = mongoose.model("Contact", contactSchema);

module.exports = { Contacts };
