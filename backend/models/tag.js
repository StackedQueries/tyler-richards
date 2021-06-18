const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Upload= require('./upload');
const opts = { toJSON: { virtuals: true } };

//TAG SCHEMA

const tagSchema = new Schema({
    tagName: String,
    //color: Object,
}, opts);


module.exports = Upload.discriminator('Tag', tagSchema);