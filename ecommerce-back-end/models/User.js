const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    password: String,
    isAdmin: Boolean,
    isBlocked: Boolean,
    cartItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;