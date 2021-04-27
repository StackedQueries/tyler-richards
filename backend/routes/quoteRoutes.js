const express = require('express');
const router = express.Router();
const quotes = require('../controllers/quotes');
const catchAsync = require('../utils/catchAsync');

router.route('/')
    .get(quotes.index)

module.exports = router;