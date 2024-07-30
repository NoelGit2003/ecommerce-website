const UserModel = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const JWT_SECRET = '444d2bad95c2d9e69eee91b7d266a8f3ab96359f3ef402a384aa984b7eb5c0c1'

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

const userForgot = async (req, res) => {
    const { email } = req.body
    try {
        const oldUser = await UserModel.findOne({ email })
        if (!oldUser) {
            return res.json({ status: "User does not exist." })
        }
        const secret = JWT_SECRET + oldUser.password
        const token = jwt.sign(
            { email: oldUser.email, id: oldUser._id },
            secret,
            { expiresIn: '5m' }
        )
        const link = `http://localhost:3000/reset-password/${oldUser._id}/${token}`
        console.log(link)
        return res.json({ status: "Password reset link generated.", link })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: "Error generating link." })
    }
}

const userResetPwd = async (req, res) => {
    const { id, token } = req.params
    console.log(req.params)

    const oldUser = await UserModel.findOne({ _id: id })
    if (!oldUser) {
        return res.json({ status: "User Not Exists!!" })
    }
    const secret = JWT_SECRET + oldUser.password

    try {
        const verify = jwt.verify(token, secret)
        res.render("reset-password", { email: verify.email, id, token });
    } catch (err) {
        console.log(err)
        res.send("Not Verified")
    }
}

const userResetPwdSubmit = async (req, res) => {
    const { id, token } = req.params
    const { password } = req.body

    const oldUser = await UserModel.findOne({ _id: id })
    if (!oldUser) {
        return res.json({ status: "User Not Exists!!" })
    }
    const secret = JWT_SECRET + oldUser.password

    try {
        const verify = jwt.verify(token, secret)
        const hashedPassword = await bcrypt.hash(password, 10)
        oldUser.password = hashedPassword
        await oldUser.save()
        res.json({ status: "Password reset successful" })
    } catch (err) {
        console.log(err)
        res.send("Something went wrong")
    }
}

module.exports = { userDefault, userLogin, userLogout, userRegister , userForgot, userResetPwd, userResetPwdSubmit}