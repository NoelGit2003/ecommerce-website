const mongoose = require('mongoose')

UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    password: String,
    isAdmin: Boolean,
    isBlocked: Boolean
})
UserModel = mongoose.model('user', UserSchema)



module.exports = UserModel;