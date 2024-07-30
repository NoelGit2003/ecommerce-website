const {
    userDefault,
    userLogin,
    userRegister,
    userLogout,
    userForgot,
    userResetPwd,
    userResetPwdSubmit
} = require('../controller/userController')

const verifyUser = require('../middleware/userMiddleware')

const express = require('express')
const router = express.Router()

router.get('/', verifyUser, userDefault)

router.post('/register', userRegister)

router.post('/login', userLogin)

router.get('/logout', userLogout)

router.post('/forgotPassword', userForgot)

router.get('/reset-password/:id/:token', userResetPwd)

router.post('/reset-password/:id/:token', userResetPwdSubmit)

module.exports = router