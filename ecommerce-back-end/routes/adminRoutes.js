const {
    getUsers, changeRole, blockUser, uploadProduct, fetchProduct, deleteProduct, getEditProduct,updateProduct
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
router.get('/allProduct',fetchProduct)
router.get('/edit/:id',getEditProduct)
router.put('/updateProd/:id',uploadDest.single('product'),updateProduct)
router.delete('/deleteProduct/:id',deleteProduct)

module.exports = router