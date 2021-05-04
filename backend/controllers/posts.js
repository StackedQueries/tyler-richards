const Post = require('../models/post');
const Image = require('../models/image')


module.exports.index = async (req, res) => {
    const posts = await Post.find({}) //{ createdOn: { $lte: request.createdOnBefore } }
        .limit(req.body.amount || 10)
        .populate('image')
    //.sort( '-createdOn' )
    res.send(posts)
}

module.exports.getPost = async (req, res) => {
    const post = await Post.find({ _id: req.params.id }).populate('image')
    res.send(post)
}

module.exports.createPost = async (req, res) => {

    const reqpost = req.body.post
    try {
        image = await Image.find(reqpost.image._id)
    }
    catch {
        image = undefined
    }

    const post = new Post({
        title: reqpost.title,
        body: reqpost.body,
        tags: reqpost.tags,
        image
    })

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
