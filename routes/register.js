const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.post('/register' , async (req , res) => {
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(req.body.password , salt)
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        password : hashed
    })
    await user.save()
    res.send('registration was successful')
})

module.exports = router