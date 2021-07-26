const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Upload = require('./upload')

const opts = { toJSON: { virtuals: true } }

// IMAGE MODEL

const ImageSchema = new Schema({

  url: String,
  filename: String
}, opts)

/* ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
}); */

module.exports = Upload.discriminator('Image', ImageSchema)
