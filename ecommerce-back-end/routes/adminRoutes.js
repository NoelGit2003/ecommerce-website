const {
    getUsers, changeRole, blockUser
} = require('../controller/adminController')

const express = require('express')
const router = express.Router()

router.get('/', getUsers)
router.put('/changeRole', changeRole)
router.put('/blockUser', blockUser)

module.exports = router