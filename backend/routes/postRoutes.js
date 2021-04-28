const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts');
const catchAsync = require('../utils/catchAsync');
const { auth } = require('../middleware')

router.route('/')
    .get(catchAsync(posts.index))
    .post(auth, catchAsync(posts.createPost))

router.route('/:id')
    .get(catchAsync(posts.getPost))
    .put(auth, catchAsync(posts.updatePost))
    .delete(auth, catchAsync(posts.deletePost));


module.exports = router;