const express = require('express');
const router = express.Router();
const { signin, signup } = require('../controllers/user')

const { auth, admin } = require('../middleware')

router.post('/signin', signin);
router.post('/signup', signup)
router.post('/test',  auth,  admin, (req, res) => {
    res.send('auth verified')
})
router.post('/isAdmin', auth, (req, res) => {
    res.json({ isAdmin: true })
})
module.exports = router;