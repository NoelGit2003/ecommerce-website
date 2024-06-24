const UserModel = require('../models/User')
const jwt = require('jsonwebtoken')


//User verification, login, logout and register 
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
                req.isAdmin = decoded.isAdmin;
                req.isBlocked = decoded.isBlocked;
                next()
            }
        })
    }
}


module.exports = verifyUser