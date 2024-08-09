const {
    getAllProducts,
    getProductByID,
    addToCart,
    clientCartItems,
    updateCart
} = require('../controller/clientController')

const {
    verifyUser
} = require('../middleware/userMiddleware')


const express = require('express')
const router = express.Router()

router.get('/getAllProducts', getAllProducts)
router.get('/getProduct/:id', getProductByID)
router.put('/addToCart', addToCart)
router.get('/cart', clientCartItems)
router.put('/updateCartQuantity', updateCart)


module.exports = router