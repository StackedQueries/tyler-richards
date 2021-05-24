
const tagSchema = new Schema({
    tagName: String,
    color: Object,
    creationDate: Date
}, opts);


module.exports = mongoose.model('Tag', tagSchema);