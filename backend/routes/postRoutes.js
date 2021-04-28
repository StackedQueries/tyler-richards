const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts');
const multer = require('multer')
const catchAsync = require('../utils/catchAsync');
const { v4: uuidv4 } = require('uuid');
const { auth } = require('../middleware')
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/imgs')
    },
    filename: (req, file, callback) => {
        callback(null,/*  uuidv4() + */ file.originalname)
    }
})

const upload = multer({ storage })

router.route('/')
    .get(catchAsync(posts.index))
    .post(/* auth, */ upload.single('postImage'),
     /* catchAsync( */posts.createPost)/* ) */

router.route('/:id')
    .get(catchAsync(posts.getPost))
    .put(auth, catchAsync(posts.updatePost))
    .delete(auth, catchAsync(posts.deletePost));


module.exports = router;