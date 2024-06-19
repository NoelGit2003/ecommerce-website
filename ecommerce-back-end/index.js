//Importing Libraries
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt') //encryption
const jwt = require('jsonwebtoken') //login token
const cookieParser = require('cookie-parser') //session cookies
const multer = require('multer') //image upload
const path = require('path')


//Setting up backend to be validated by frontend
const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5178'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(cookieParser())
app.use(express.static('public'))


//Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')




const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json('The token is missing')
    } else {
        jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
            if (err) {
                return res.json('The token is wrong')
            } else {
                req.email = decoded.email;
                req.name = decoded.name;
                next()
            }
        })
    }
}


app.get('/', verifyUser, (req, res) => {
    return res.json({ email: req.email, name: req.name })
})


//Register user or admin API
app.post('/register', (req, res) => {
    const { name, email, mobile, password, isAdmin, isBlocked} = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ name, email, mobile, password: hash, isAdmin, isBlocked })
                .then(user => res.json(user))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))
})


//Login user or admin API
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email, name: user.name }, "jwt-secret-key", { expiresIn: "1d" });
                        res.cookie('token', token)
                        return res.json('Success');
                    } else {
                        return res.json('Password is incorrect')
                    }
                })
            } else {
                res.json('User not exist')
            }
        })
});