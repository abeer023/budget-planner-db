const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
const Transaction = require('../models/transaction');
router.get('/get-transaction',function(req,res){
    Transaction.find({},function(err,result){
        res.send(result);
    })
})

router.post('/get-transaction-by-user',function(req,res){
    Transaction.find({userId:req.body.userId},function(err,result){
        res.send(result);
    })
})

router.post('/add-transaction',function(req,res){
    var data = JSON.parse(req.body.body);
    console.log(data);
    Transaction.create({
        description: data.description,
        category: data.category,
        amount: data.amount,
        userId: data.userId,
        month: data.month,
        year: data.year
    },function(err,result){
        res.send(result);
    })
})

router.delete('/delete-transaction',function(req,res){
    Transaction.findByIdAndRemove({
        _id: req.body.id     
    }, function(err, result){
        res.send(result);
    })
})

module.exports = router;
