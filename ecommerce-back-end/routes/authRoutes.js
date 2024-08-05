const {
    userDefault,
    userLogin,
    userRegister,
    userLogout,
    sendOTP,
    userResetPwd
} = require('../controller/userController')

const verifyUser = require('../middleware/userMiddleware')

const express = require('express')
const router = express.Router()

router.get('/', verifyUser, userDefault)

router.post('/register', userRegister)

router.post('/login', userLogin)

router.get('/logout', userLogout)

router.post('/reset_password_otp', sendOTP)

router.put('/reset-password', userResetPwd)

module.exports = router