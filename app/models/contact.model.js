const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    group_id: mongoose.ObjectId,
    company_id: [String],
    name: String,
    image: String,
    email: String,
    location: String,
    status: String,
    job: String,
    phone: String,
    created: { type: Date, default: Date.now },
    connections: [String],
    newField:Array,
});

module.exports = mongoose.model("contact", contactSchema);