const Account = require('../models/account')
const bcrypt = require("bcrypt")
const { passwordHashed } = require("../helpers/password")

const createAccount = async (req, res, next) => {
    const { name, email, password } = req.body
    const salt = bcrypt.genSaltSync(10)

    try {
        const encryptPassword = await passwordHashed(password, salt, res)
        const account = new Account({
            name,
            email,
            balance: 1000, 
            encryptPassword
        })
        account.save()
            .then((account) => {
                res.status(200).json(account)
            }).catch((err) => {
                return res.status(500).json(err)
            })
    } catch (e) {
        return res.status(400).json(e)
    }
}

module.exports = {
    createAccount
}