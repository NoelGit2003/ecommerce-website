const {
    getUsers, changeRole, blockUser, uploadProduct
} = require('../controller/adminController')

const {
    verifyAdmin, uploadDest
} = require('../middleware/adminMiddleware')


const express = require('express')
const router = express.Router()

router.get('/', getUsers)
router.put('/changeRole', changeRole)
router.put('/blockUser', blockUser)

router.post('/upload', uploadDest.single('product'), uploadProduct);

module.exports = router