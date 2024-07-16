const UserModel = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')


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

module.exports = {
    getUsers, changeRole, blockUser
};