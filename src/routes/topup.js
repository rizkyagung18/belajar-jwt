const topupController = require('../controllers/topup')
const router = require('express').Router()
const { authentication} = require('../middlewares/auth')

router
    .get('/', topupController.getAllTopUp)
    .get('/:order', topupController.getTopUpByOrder)
    .post('/', authentication, topupController.postTopUp)
    .patch('/:order', authentication, topupController.editTopUp)
    .delete('/:order', authentication, topupController.deleteTopUp)

module.exports = router