const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
    user_id: mongoose.ObjectId,
    contact_id: mongoose.ObjectId,
    name: String,
    date: Date,
    location: String,
    description: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("interaction", interactionSchema);