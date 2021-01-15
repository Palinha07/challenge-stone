const express = require("express")
const app = express()
const mongoose = require("mongoose")

const accounts = require("./routes/account")

mongoose.connect('mongodb://localhost/Stone-bank', 
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

module.exports = app