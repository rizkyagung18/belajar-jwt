const router = require('express').Router()
const authRoutes = require('./routes/auth')
const topupRoutes = require('./routes/topup')

router
    .use('/auth', authRoutes)
    .use('/topup', topupRoutes)

module.exports = router