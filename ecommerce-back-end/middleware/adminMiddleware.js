const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path')

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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../storage', 'uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    }
})
const uploadDest = multer({ storage: storage })


module.exports = {
    verifyAdmin, uploadDest
}