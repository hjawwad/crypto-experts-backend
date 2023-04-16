const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    user_id: mongoose.ObjectId,
    name: String,
    icon: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("group", groupSchema);