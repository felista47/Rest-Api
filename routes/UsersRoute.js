const express = require('express')
const router = express.Router()
const {home,Users,User,login } = require('../controllers/usercontroller')

router.get('/', home)
router.get('/users', Users)
router.get('/user/:email',User)
// router.get('/login',login)

module.exports = router

