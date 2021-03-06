const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const secret = process.env.JWT_SECRET

// SIGN IN
module.exports.signin = async (req, res) => {
  let { email, password } = req.body
  email = email.toLowerCase()
  try {
    const oldUser = await User.findOne({ email })

    // if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    // POSSIBLE REMOVAL

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '1h' })

    console.log(oldUser)
    res.status(200).json({ result: { email: oldUser.email, id: oldUser._id, status: oldUser.isAdmin }, token })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

// SIGNUP
module.exports.signup = async (req, res) => {
  let { email, password, firstName, lastName } = req.body
  email = email.toLowerCase()
  console.log(email, password, firstName, lastName)
  try {
    const oldUser = await User.findOne({ email })

    if (oldUser) return res.status(400).json({ message: 'User already exists' })

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, isAdmin: false })

    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '1h' })

    res.status(201).json({ result: { email: result.email, id: result._id, status: result.isAdmin }, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })

    console.log(error)
  }
}
