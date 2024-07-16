const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json('The token is missing');
    } else {
        jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
            if (err) {
                return res.json('The token is wrong');
            } else {
                req.email = decoded.email;
                req.name = decoded.name;
                req.isAdmin = decoded.isAdmin;
                req.isBlocked = decoded.isBlocked;

                if (!req.isAdmin) {
                    return res.status(403).json('Access denied.');
                }

                next();
            }
        });
    }
};

module.exports = verifyAdmin;