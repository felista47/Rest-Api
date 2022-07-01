const express = require('express')
const router = express.Router()
const {home,Users,User,login,create} = require('../controllers/usercontroller')

router.get('/', home)
router.get('/users', Users)
router.get('/user/:email',User)
router.post('/login',login)
router.post('/create',create)

module.exports = router

