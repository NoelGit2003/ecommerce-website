const UserModel = require('../models/User')
const ProductModel = require('../models/Product')

const getAllProducts = async (req, res) => {
  try {
    const Allproducts = await ProductModel.find();
    res.json(Allproducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getProductByID = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: `Product with id ${id} not found` });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while retrieving the product' });
  }
};

module.exports = { getAllProducts, getProductByID };