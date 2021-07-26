const express = require('express')
const router = express.Router()
const { signin, signup } = require('../controllers/user')
const signupValidator = require('../validators/signup')
const signinValidator = require('../validators/signin')
const { auth, admin } = require('../middleware')

// USER ROUTES
// AND TEST ROUTES

router.post('/signin', signinValidator.validateUser, signin)
router.post('/signup', signupValidator.validateUser, signup)
router.post('/test', auth, admin, (req, res) => {
  res.send('auth verified')
})
module.exports = router
