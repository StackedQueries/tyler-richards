const Tag = require("../models/tag")

//GET ALL TAGS
module.exports.index = async (req, res) => {
    const tags = await Tag.find({})
    res.send(tags)
}

//CREATE TAG
module.exports.createTag = async (req, res) => {
    const tag = new Tag(req.body.tag);
    console.log(req.body)
    console.log(tag)
    //await tag.save()
    res.send(tag)
    
}

//DELETE TAG BY ID
module.exports.deleteTag = async (req, res) => {
    const tag = await Tag.find({_id: req.params.id})
    if (tag){
        await Tag.findByIdAndDelete(tag)
    }
    res.send(tag)
}