const Post = require('../models/post');

module.exports.index = async (req, res) => {
    const posts = await Post.find({}) //{ createdOn: { $lte: request.createdOnBefore } }
        .limit(req.body.amount || 10)
    //.sort( '-createdOn' )
    res.send(posts)
}

module.exports.getPost = async (req, res) => {
    const post = await Post.find({ _id: req.params.id })
    res.send(post)
}

module.exports.createPost = async (req, res) => {
    const post = new Post(req.body.post)
    await post.save();
    res.send(post);
}

module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, { ...req.body.post })
    await post.save();
    res.send(post);
}

module.exports.deletePost = async (req, res) => {
    const post = await Post.find({ _id: req.params.id })

    if (post) {
        await Post.findByIdAndDelete(req.params.id)
    }

    res.send(post);
}
