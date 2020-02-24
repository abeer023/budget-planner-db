//import mongoose as it is dealing with database

const mongoose = require('mongoose');


//create schema on database variable

const Schema = mongoose.Schema;
const BudgetSchema = new Schema ({
    month: {
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },    
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = User = mongoose.model("budget",BudgetSchema);
