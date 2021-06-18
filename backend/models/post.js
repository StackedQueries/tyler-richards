const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Upload = require('./upload');
const opts = { toJSON: { virtuals: true } };

//POST SCHEMA

const PostSchema = new Schema({
    title: String,
    body: Object,
    desc: String,
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    
    likedBy:[{
        type: Schema.Types.ObjectId,
        ref:'User'
    }],
    image: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
        }]
}, opts);

PostSchema.virtual('currLikes',async function (doc){
    if(doc){
        return doc.likedBy.length;
    }
})

 PostSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Comments.deleteMany({
            _id: {
                $in: doc.comments
            }
        })
    }
}) 

module.exports = Upload.discriminator('Post', PostSchema);