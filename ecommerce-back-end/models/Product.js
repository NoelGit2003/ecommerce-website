// const mongoose = require('mongoose')

// ProductSchema = new mongoose.Schema({
//     ProductName: String,
//     ProductImage: String,
//     ProductTitle: String,
//     ProductCategory: String,
//     ProductGenderCategory:String,
//     ProductPrice: Number,
//     ProductRating: Number,
//     ProductDiscount: Number,
//     ProductStock: Number,

//     ProductSize: String,
//     ProductColour: String,
//     ProductDescription: String,
    
//     ProductReviews: Object
// })

// ProductModel = mongoose.model('product', ProductSchema)

// module.exports = ProductModel;

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  ProductName: String,
  ProductImage: String,
  ProductTitle: String,
  ProductCategory: String,
  ProductGenderCategory: String,
  ProductPrice: Number,
  ProductRating: Number,
  ProductDiscount: Number,
  ProductStock: Number,
  ProductSize: [String],
  ProductColour: [String],
  ProductDescription: String,
  ProductReviews: [String],
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;