const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const opts = {  discriminatorKey: 'kind'};

const uploadSchema = new Schema({
    kind: {
        type: String,
        required: true,
        enum: ['Comment', 'Post','Image', 'User', 'Tag']
      },
    releaseDate: {
        type: Date,
        default: Date.now
      },
    creationDate: {
        type: Date,
        default: Date.now
      },
    lastEdit: {
        type: Date,
        default: Date.now
      },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    data:{}


}, opts);

 const Upload = mongoose.model('Upload', uploadSchema);
 module.exports = Upload;