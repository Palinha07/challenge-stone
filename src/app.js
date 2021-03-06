const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const accounts = require("./routes/account")
const signin = require("./routes/signinRoute")

mongoose.connect(`${process.env.DATABASE}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept"
    )
    next()
})

app.use("/accounts", accounts)
app.use("/signin", signin)

module.exports = app