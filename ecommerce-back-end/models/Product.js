const mongoose = require('mongoose')

ProductSchema = new mongoose.Schema({
    ProductName: String,
    ProductImage: String,
    ProductTitle: String,
    ProductCategory: String,

    ProductPrice: Number,
    ProductRating: Number,
    ProductDiscount: Number,
    ProductStock: Number,

    ProductSize: String,
    ProductColour: String,
    
    ProductReviews: Object
})

ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel;