const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    group_id: mongoose.ObjectId,
    company_id: mongoose.ObjectId,
    name: String,
    image: String,
    email: String,
    location: String,
    status: String,
    job: String,
    phone: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("contact", contactSchema);