const bcrypt = require("bcrypt")

exports.passwordHashed = async (password, salt, res) => {
    try{
        const hashPassword = await bcrypt.hash(password, salt)
        return hashPassword
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            errors: ["something wrong has happened, password not saved"]
        })
    }
}