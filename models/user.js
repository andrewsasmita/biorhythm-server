var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema ({
    email: String,
    password: String,
    name: String,
    address: String,
    occupation: String,
})

var User = mongoose.model('User', userSchema)

module.exports = User
