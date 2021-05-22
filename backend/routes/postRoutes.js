const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts');
const catchAsync = require('../utils/catchAsync');
const { auth, admin } = require('../middleware')

router.route('/')
    .get(/* catchAsync( */posts.index/* ) */)
    .post(/* auth, */ catchAsync(posts.createPost))
router.route('/:id')
    .get(catchAsync(posts.getPost))
    .put(auth, admin, catchAsync(posts.updatePost))
    .delete(auth, admin, catchAsync(posts.deletePost));

router.route('/:tag')
    .get(posts.getTag)

module.exports = router;