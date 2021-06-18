const express = require('express');
const router = express.Router();
const { signin, signup } = require('../controllers/user')

const { auth, admin } = require('../middleware')

//USER ROUTES
//AND TEST ROUTES


router.post('/signin', signin);
router.post('/signup', signup)
router.post('/test',  auth,  admin, (req, res) => {
    res.send('auth verified')
})
module.exports = router;