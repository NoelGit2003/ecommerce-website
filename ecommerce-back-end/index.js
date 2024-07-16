//Importing Libraries
const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
// const bcrypt = require('bcrypt') //encryption
// const jwt = require('jsonwebtoken') //login token
const cookieParser = require('cookie-parser') //session cookies
const multer = require('multer') //image upload
const path = require('path')


const dbConnect = require('./config/dbConnect')
const verifyUser = require('./middleware/userMiddleware')
const authRouter = require('./routes/authRoutes')
const adminRouter = require('./routes/adminRoutes')

//Connect database
dbConnect();

//Setting up backend to be validated by frontend
const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(cookieParser())
app.use(express.static('public'))


app.use('/', authRouter)
app.use('/admin', adminRouter)


app.listen('3000', () => {
    console.log('Server started at port 3000')
})