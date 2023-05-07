const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  group_id: mongoose.ObjectId,
  company_name: String,
  name: String,
  //   image: String,
  email: String,
  tag: String,
  city: String,
  country: String,
  //   status: String,
  job: String,
  phone: String,
  linkedin: String,
  twitter: String,
  dob: String,
  meet: String,
  created: { type: Date, default: Date.now },
  //   connections: [String],
  //   newField: Array,
});

module.exports = mongoose.model("contact", contactSchema);
