const express = require('express')
const router = express.Router()
const images = require('../controllers/images')
const multer = require('multer')

const catchAsync = require('../utils/catchAsync')
const { v4: uuidv4 } = require('uuid')
const { auth, admin } = require('../middleware')

// IMAGE STORAGE
// TODO: MOVE TO DIFF FILE

const storage = multer.diskStorage({
  destination: './public/imgs',
  filename: function (req, file, cb) {
    return cb(null, uuidv4() + file.originalname)
  }
})

const upload = multer({ storage })

// IMAGE ROUTES
router.route('/')
  .get(catchAsync(images.index))
  .post(auth, admin, upload.array('images'), images.uploadArray)

router.route('/:id')
  .get(catchAsync(images.getImage))
  .delete(auth, admin, catchAsync(images.deleteImage))

module.exports = router
