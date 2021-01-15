const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    balance: { type: Number },
    encryptPassword: String
    
},
{ timestamps: true });

const Account = mongoose.model("Account", AccountSchema)
module.exports = Account
