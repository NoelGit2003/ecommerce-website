const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        //Connect MongoDB
        mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    }catch (err) {
        console.log(`Database error: ${err}`)
    }
}

module.exports = dbConnect;