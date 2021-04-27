const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const opts = { toJSON: { virtuals: true } };

const PostSchema = new Schema({
    title: String,
    body: Object,
    tags: [String],
    images: [ImageSchema],
    /*     author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'comments'
            }
        ] */
}, opts);



/* PostSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Comments.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
}) */

module.exports = mongoose.model('Post', PostSchema);