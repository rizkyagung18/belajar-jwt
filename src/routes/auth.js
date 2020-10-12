const router = require('express').Router()
const authController = require('../controllers/auth')
const { requiredName, requiredEmail, requiredPassword } = require('../middlewares/validator')

router
    .post('/login', authController.postLogin)
    .post('/register', [requiredName, requiredEmail, requiredPassword], authController.postRegister)

module.exports = router