//Importing Libraries
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

//importing mvc components
const dbConnect = require('./config/dbConnect')
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
// app.use(express.static('public'))
app.use('/uploads', express.static(path.join(__dirname, 'storage/uploads')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


//Using app routes
app.use('/', authRouter)
app.use('/admin', adminRouter)


app.listen('3000', () => {
    console.log('Server started at port 3000')
})