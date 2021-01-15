const express = require("express")
const router = express.Router()
const accountController = require("../controllers/account")

router.post('/create-account', accountController.createAccount)

module.exports = router