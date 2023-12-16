const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/login' , async (req , res) => {
    let user = await User.findOne({email : req.body.email})
    console.log(user)
    const hashCompare = await bcrypt.compare(req.body.password , user.password)
    if (!hashCompare){
        res.send('Invalid username or password')
    }
    else{
        const token = user.generateToken()
        res.send(token)
    }
})

module.exports = router
