const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts');
const catchAsync = require('../utils/catchAsync');
const { auth, admin } = require('../middleware')

//POST ROUTES

router.route('/')
    .get( catchAsync( posts.index ))
    .post( /*auth,*/ posts.createPost)
router.route('/:id')
    .get(catchAsync(posts.getPost))
    .put(auth, admin, catchAsync(posts.updatePost))
    .delete(auth, admin, catchAsync(posts.deletePost));

module.exports = router;