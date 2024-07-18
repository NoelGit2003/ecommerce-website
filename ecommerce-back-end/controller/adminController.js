const { json } = require('express');
const UserModel = require('../models/User')

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

const uploadProduct = (req, res) => {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    try {
        console.log(req.file)
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        return res.json(req.file);
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred', details: err.message });
    }
};

module.exports = {
    getUsers, changeRole, blockUser, uploadProduct
};