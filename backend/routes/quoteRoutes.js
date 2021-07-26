const express = require('express')
const router = express.Router()
const quotes = require('../controllers/quotes')
const catchAsync = require('../utils/catchAsync')

// QUOTE ROUTE

router.route('/')
  .get(catchAsync(quotes.index))

module.exports = router
