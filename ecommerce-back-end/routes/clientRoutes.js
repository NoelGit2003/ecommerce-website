const {
    getAllProducts,
    getProductByID
} = require('../controller/clientController')

const express = require('express')
const router = express.Router()

router.get('/getAllProducts', getAllProducts)
router.get('/getProduct/:id', getProductByID)

module.exports = router