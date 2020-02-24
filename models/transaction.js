//import mongoose as it is dealing with database

const mongoose = require('mongoose');


//create schema on database variable

const Schema = mongoose.Schema;
const TransactionSchema = new Schema ({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    amount: {
        type: Number,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
})

module.exports = User = mongoose.model("transaction",TransactionSchema);
