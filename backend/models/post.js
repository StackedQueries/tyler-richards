const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const PostSchema = new Schema({
    title: String,
    body: Object,
    tags: [String],
    image: {
        type: Schema.Types.ObjectId,
        ref: 'image'
    }
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