const mongoose = require('mongoose');

const Upload = require('./upload');
//USER MODEL

const userSchema = mongoose.Schema({
    name: {
         type: String,
          required: true 
        },
    email: { 
        type: String,
         required: true
         },
    password: { 
        type: String,
         required: true
         },
    lastLogin:{
        type:Date
    },
    isAdmin: {
         type: Boolean, 
        required: true 
    }
});

module.exports = Upload.discriminator("User", userSchema);