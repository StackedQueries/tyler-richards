const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdDate:{type: Date},
    lastLogin:{type:Date},
    id: { type: String },
    isAdmin: { type: Boolean, required: true }
});

module.exports = mongoose.model("User", userSchema);