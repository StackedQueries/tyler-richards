
const Image = require('../models/image')
const Post = require('../models/post');


//GETS ALL POSTS (IF TAG QUERY, GET ALL POSTS WITH TAG))
module.exports.index = async (req, res) => {
    tag = req.query.tag
    let request = {}
    // if (tag){
    //     request = {tags : {$in:[tag]}}
    // }
    const posts = await Post.find(request)
     //{ createdOn: { $lte: request.createdOnBefore } }
        //.limit(req.body.amount || 10)
        .populate('image')
    //.sort( '-createdOn' )
    console.log('posts sent')
    res.send(posts)
}

//GET POST BY ID
module.exports.getPost = async (req, res) => {
    const post = await Post.find({ _id: req.params.id }).populate('image')
    console.log(post)
    res.send(post)
}

//CREATE POST
module.exports.createPost = async (req, res) => {
    const reqpost = req.body.post
    console.log(reqpost)
    try {
        image = await Image.findById(reqpost.image.id)
        console.log('image found')
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

//UPDATE POST
module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, { ...req.body.post })
    await post.save();
    res.send(post);
}

//DELETE POST
module.exports.deletePost = async (req, res) => {
    const post = await Post.find({ _id: req.params.id })

    if (post) {
        await Post.findByIdAndDelete(req.params.id)
    }
    res.send(post);
}
