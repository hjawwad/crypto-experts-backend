const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: String,
  password: String,
  token: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema);
