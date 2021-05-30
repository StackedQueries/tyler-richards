const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

//TAG SCHEMA

const tagSchema = new Schema({
    tagName: String,
    color: Object,
    creationDate: Date
}, opts);


module.exports = mongoose.model('Tag', tagSchema);