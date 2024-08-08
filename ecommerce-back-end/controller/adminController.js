const UserModel = require('../models/User')
const ProductModel = require('../models/Product')

//get all users by admin
const getUsers = (req, res) => {
    UserModel.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: 'An error occurred while fetching users', details: err });
        });
};

//change user role
const changeRole = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.isAdmin = !user.isAdmin;
        const updatedUser = await user.save();

        return res.json({ isAdmin: updatedUser.isAdmin });
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while updating the user', details: err.message });
    }
};

//block or unblock user
const blockUser = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.isBlocked = !user.isBlocked;
        const updatedUser = await user.save();

        return res.json({ isBlocked: updatedUser.isBlocked });
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while updating the user', details: err.message });
    }
};

const uploadProduct = async (req, res) => {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const product = await ProductModel.create({
            ProductImage: req.file.filename,
            ProductName: req.body.prodName,
            ProductTitle: req.body.prodTitle,
            ProductCategory: req.body.prodCategory,
            ProductGenderCategory:req.body.prodGenderCategory,
            ProductPrice: req.body.prodPrice,
            ProductRating: req.body.prodRate,
            ProductDiscount: req.body.prodDiscount,
            ProductStock: req.body.prodStock,
            ProductSize: req.body.prodSize,
            ProductColour: req.body.prodColour,
            ProductDescription:req.body.prodDescription
        });

        res.status(201).json(product);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'An error occurred', details: err.message });
    }
};

// Get all products :-
const fetchProduct = async(req,res) => {
    try {
        const Allproducts = await ProductModel.find();
        res.json(Allproducts);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// delete product :-
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await ProductModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: `Product with id ${id} not found` });
        }

        res.status(200).json({ message: `Product with id ${id} deleted successfully.` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while deleting the product' });
    }
};

// get the product :-
const getEditProduct = async (req, res) => {
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


const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = {
            ProductImage: req.file ? req.file.filename : undefined,
            ProductName: req.body.prodName,
            ProductTitle: req.body.prodTitle,
            ProductCategory: req.body.prodCategory,
            ProductGenderCategory:req.body.prodGenderCategory,
            ProductPrice: req.body.prodPrice,
            ProductRating: req.body.prodRate,
            ProductDiscount: req.body.prodDiscount,
            ProductStock: req.body.prodStock,
            ProductSize: req.body.prodSize,
            ProductColour: req.body.prodColour,
            ProductDescription:req.body.prodDescription

        };

        // Remove undefined fields from the updateData object
        Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

        const result = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while updating the product" });
    }
};




module.exports = {
    getUsers, changeRole, blockUser, uploadProduct, fetchProduct, deleteProduct,getEditProduct, updateProduct
};