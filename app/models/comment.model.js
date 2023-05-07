const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user_id: mongoose.ObjectId,
  contact_id: mongoose.ObjectId,
  comment: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
