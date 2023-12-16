const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    username : {
        type : String, 
        required : true
    },
    email : {
        type : String, 
        required : true
    },
    password : {
        type : String,
        required : true
    }
    
})
userSchema.methods.generateToken = function(){
    const token = jwt.sign({id : this._id} , process.env.SECRET_KEY)
    return token 
}
const User = mongoose.model('User' , userSchema)

module.exports = User