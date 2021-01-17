const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")
const Account = require("../models/account")

function checkPassword(passwordSignin, password) {
    return bcrypt.compareSync(passwordSignin, password)
}
const accessToken = (req, res) => {
    const { clientName, password: passwordSignin } = req.body;

    Account.findOne({ name: clientName })
        .then((user) => {
            const { id, name, encryptPassword } = user;
            if (!checkPassword(passwordSignin, encryptPassword)) { return res.status(401).json({ message: `incorrect Password` }) }
            return res.status(200).json({
                user: {
                    id,
                    name
                },
                token: jwt.sign({ id }, `${process.env.SECRET}`, {
                    expiresIn: `${process.env.EXPIRESIN}`
                })

            })
        })
        .catch(err => { res.status(203).json({ message: `account not found` }) })
}

module.exports = {
    accessToken
}