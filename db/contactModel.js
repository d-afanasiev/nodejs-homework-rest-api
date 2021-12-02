const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const contactSchema = new Schema({
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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Contact",
  },
});

contactSchema.plugin(mongoosePaginate);

const Contacts = model("Contact", contactSchema);

module.exports = { Contacts };
