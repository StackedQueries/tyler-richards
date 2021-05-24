
const CommentSchema = new Schema({
    title: String,
    body: Object,
    creationDate: Date,
    headPost: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
        
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
        }]
}, opts);



 CommentSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Comment.deleteMany({
            _id: {
                $in: doc.comments
            }
        })
    }
}) 

module.exports = mongoose.model('Post', PostSchema);