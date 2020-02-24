const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
const Budget = require('../models/budget');
router.get('/get-budget',function(req,res){
    Budget.find({},function(err,result){
        res.send(result);
    })
})

router.post('/get-budget-by-user',function(req,res){
    Budget.find({userId:req.body.userId},function(err,result){
        res.send(result);
    })
})

router.post('/get-current-budget-by-user',function(req,res){
    Budget.find({userId:req.body.userId},function(err,result){
        res.send(result);
    })
})

router.post('/add-budget',function(req,res){
    var data = JSON.parse(req.body.body);
    Budget.create({
        month: data.month,
        year: data.year,
        amount: data.amount,
        userId: data.userId
    },function(err,result){
        res.send(result);
    })
})

router.put('/edit-budget', function(req, res){
    console.log(req.body);
    var data = JSON.parse(req.body.body);
    Budget.findByIdAndUpdate({
        _id: data._id
    }, {$set: {
        month: data.month,
        year: data.year,
        amount: data.amount,
        userId: data.userId
    }}, function(err, result){
        res.send(result);
    })
})

module.exports = router;
