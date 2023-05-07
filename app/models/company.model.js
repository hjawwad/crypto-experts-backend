const mongoose = require("mongoose");

const comapnySchema = new mongoose.Schema({
  name: String,
  icon: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comapny", comapnySchema);
