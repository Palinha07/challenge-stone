const express = require("express")
const router = express.Router()
const accountController = require("../controllers/account")

router.post('/create-account', accountController.createAccount)
router.post('/transfers/:id', accountController.transfersAmount)
router.post('/withdraw/:id', accountController.withdraw)

module.exports = router