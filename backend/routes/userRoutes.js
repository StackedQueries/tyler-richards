const express = require('express');
const router = express.Router();
const { signin, signup } = require('../controllers/user')
const signup = require('../validators/signup')
const signin = require('../validators/signin')
const { auth, admin } = require('../middleware')

//USER ROUTES
//AND TEST ROUTES


router.post('/signin', signin.validateUser,signin);
router.post('/signup',signup.validateUser, signup)
router.post('/test',  auth,  admin, (req, res) => {
    res.send('auth verified')
})
module.exports = router;