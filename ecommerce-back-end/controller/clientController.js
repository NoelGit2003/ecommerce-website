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
}

const addToCart = async (req, res) => {
  const { email, productId, quantity } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cartItem = user.cartItems.find(item => item.product.toString() === productId);

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      user.cartItems.push({ product: productId, quantity });
    }
    await user.save();

    res.status(200).json({ message: 'Product added to cart successfully', cartItems: user.cartItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the product to the cart' });
  }
}


const clientCartItems = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await UserModel.findOne({ email }).populate('cartItems.product');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the cart items' });
  }
}

const updateCart = async (req, res) => {
  try {
    const { email, productId, quantity } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const cartItem = user.cartItems.find(item => item.product.toString() === productId);

    if (cartItem) {
      cartItem.quantity = quantity;
    } else {
      user.cartItems.push({ product: productId, quantity });
    }

    await user.save();
    res.status(200).json({ message: 'Cart updated successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

const cartItemDelete = async (req, res) => {
  const { email, productId } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.cartItems = user.cartItems.filter(item => item.product.toString() !== productId);
    await user.save();

    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

module.exports = { getAllProducts, getProductByID, addToCart, clientCartItems, updateCart , cartItemDelete};