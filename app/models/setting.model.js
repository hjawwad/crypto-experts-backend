const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  user_id: mongoose.ObjectId,
  sidebar_heading: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("setting", settingSchema);
