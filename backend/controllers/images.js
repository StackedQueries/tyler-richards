const Image = require('../models/image')
const fs = require('fs')

// UPLOAD ARRAY
// TODO: Upload whole instead of for loop?
module.exports.uploadArray = async (req, res) => {
  let images = []
  console.log(req.files)
  for (img of req.files) {
    const image = new Image({
      url: 'imgs/' + img.filename,
      filename: img.filename
    })
    await image.save()
    images.push(image)
  }
  res.send(images)
}

// FIND ALL IMAGES
module.exports.index = async (req, res) => {
  const images = await Image.find({})
  res.send(images)
}

// FIND IMAGE BY ID
module.exports.getImage = async (req, res) => {
  const image = await Image.find({ _id: req.params.id })
  res.send(image)
}

// DELETE IMAGE
module.exports.deleteImage = async (req, res) => {
  const image = await Image.find({ _id: req.params.id })

  // DELETES IMAGE OUT OF LOCAL STORAGE
  if (image) {
    fs.unlink(
            `./public/imgs/${image[0].filename}`, (err) => {
              if (err) {
                console.error(err)
              }
            })
    await Image.findByIdAndDelete(req.params.id)
  }

  res.send(image)
}
