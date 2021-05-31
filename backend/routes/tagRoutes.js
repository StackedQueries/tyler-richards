const express = require('express');
const router = express.Router();
const tags = require('../controllers/tags');
const catchAsync = require('../utils/catchAsync');
const { auth, admin } = require('../middleware')

//TAG ROUTES

router.route('/')
    .get( catchAsync( tags.index ))
    .post( auth, admin, catchAsync(tags.createTag))
router.route('/:id')
    .delete(auth, admin, catchAsync(tags.deleteTag));

module.exports = router;