const express = require('express');
const router = express.Router();
const images = require('../controllers/images');
const multer = require('multer')

const catchAsync = require('../utils/catchAsync');
const { v4: uuidv4 } = require('uuid');
const { auth } = require('../middleware')


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/imgs')
    },
    filename: (req, file, callback) => {
        callback(null, uuidv4() + file.originalname)
    }
})


const upload = multer({ storage })


router.route('/')
    .get(catchAsync(images.index))
    .post(/* auth,  */upload.array('images'), images.uploadArray)


router.route('/:id')
    .get(catchAsync(images.getImage))
    .delete(/* auth,  */catchAsync(images.deleteImage));

module.exports = router;