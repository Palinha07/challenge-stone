const { req, res } = require("express")
const Account = require('../models/account')
const bcrypt = require("bcrypt")
const { passwordHashed } = require("../helpers/password")
const mongoose = require("mongoose")

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

const transfersAmount = async (req, res) => {
    const { id } = req.params
    const { recipientsName, amount } = req.body
    const name = recipientsName
    const newBalance1 = Account.balance - amount
    const newBalance2 = Account.balance + amount
    let transferredAmount = await Account.findByIdAndUpdate(id, (newBalance1))
    let amountReceived = await Account.findOneAndUpdate(name, (newBalance2))
        .then(() => {
            res.status(201).json({ message: `TED completed` })
        })
        .catch((err) => { res.status(400).json(err) })
}

const withdraw = async (req, res) => {
    const { id } = req.params
    const { amount } = req.body
    try {
        const newBalance = await Account.findByIdAndUpdate(id, Account.balance - amount)
        if (Account.balance < amount) {
            return res.status(400).json("insufficient funds")
        }
        else {

            return res.status(200).json("successful operation")
        }
    }
    catch (e) {
        return res.status(400).json(e)
    }
}

module.exports = {
    createAccount,
    transfersAmount,
    withdraw
}