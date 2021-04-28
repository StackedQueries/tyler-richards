const Image = require('../models/image');

const fs = require('fs')
module.exports.uploadArray = async (req, res) => {
    images = []
    for (img of req.files) {
        const image = new Image({
            url: "imgs/" + img.filename,
            filename: img.filename
        })
        await image.save()
        images.push(image)
    }
    res.send(images)
}
module.exports.index = async (req, res) => {
    const images = await Image.find({})
    res.send(images)
}

module.exports.getImage = async (req, res) => {
    const image = await Image.find({ _id: req.params.id })
    res.send(image)
}

module.exports.deleteImage = async (req, res) => {
    const image = await Image.find({ _id: req.params.id })

    if (image) {
        fs.unlink(
            `./public/imgs/${image[0].filename}`, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        await Image.findByIdAndDelete(req.params.id)
    }

    res.send(image);
}