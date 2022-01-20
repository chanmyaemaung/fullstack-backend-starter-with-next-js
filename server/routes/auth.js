const router = require('express').Router()

// controllers
const { register } = require('../controllers/auth')

router.post('/register', register)

module.exports = router
