const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Upload = require('./upload')
const opts = { toJSON: { virtuals: true } }

// COMMENT MODEL

const CommentSchema = new Schema({
  title: String,
  body: Object,
  headPost: {
    type: Schema.Types.ObjectId,
    ref: 'Post'

  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }]
}, opts)

PostSchema.virtual('currLikes', async function (doc) {
  if (doc) {
    return doc.likedBy.length
  }
})

CommentSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await Comment.deleteMany({
      _id: {
        $in: doc.comments
      }
    })
  }
})

module.exports = Upload.discriminator('Comment', CommentSchema)
