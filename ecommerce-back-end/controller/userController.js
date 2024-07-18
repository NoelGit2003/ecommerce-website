const UserModel = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

//User logined 
const userDefault = ((req, res) => {
    return res.json({
        email: req.email,
        name: req.name,
        isAdmin: req.isAdmin,
        isBlocked: req.isBlocked
    })
})

//Register user or admin API
const userRegister = ((req, res) => {
    const { name, email, mobile, password, isAdmin, isBlocked } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ name, email, mobile, password: hash, isAdmin, isBlocked })
                .then(user => res.json(user))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))
})


//Login user or admin API
const userLogin = ((req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user.isBlocked) {
                return res.json({ isBlocked: true })
            }
            else if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({
                            email: user.email,
                            name: user.name,
                            isAdmin: user.isAdmin,
                            isBlocked: user.isBlocked
                        }, "jwt-secret-key", { expiresIn: "1d" });
                        res.cookie('token', token)
                        return res.json({ token });
                    } else {
                        return res.json('Password is incorrect')
                    }
                })
            } else {
                return res.json('User not exist')
            }
        })
        .catch(err => console.log(err))
});

//logout
const userLogout = ((req, res) => {
    res.clearCookie('token');
    return res.json('Success')
})



module.exports = { userDefault, userLogin, userLogout, userRegister }