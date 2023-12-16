const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

const app = express()

app.use(express.json())

mongoose.connect(process.env.DBURL)
mongoose.connection.on('connected' , () => {
    console.log('Connected to mongoose')
})
mongoose.connection.on('error' , () => {
    console.log('An error occurred')
})
app.listen(3080)
console.log('Listening on port 3080')

app.use('/api/v1/' , registerRouter)
app.use('/api/v1/' , loginRouter)
