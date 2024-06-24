const {
    userDefault,
    userLogin,
    userRegister,
    userLogout
} = require('../controller/userController')

const verifyUser = require('../middleware/userMiddleware')

const express = require('express')
const router = express.Router()

router.get('/', verifyUser, userDefault)

router.post('/register', userRegister)

router.post('/login', userLogin)

router.get('/logout', userLogout)

module.exports = router