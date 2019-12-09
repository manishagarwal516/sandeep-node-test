const express = require('express');
const validation = require('../middleware/validation');
const signUp = require('../controllers/signUpController');
const route = express.Router();

route.post('/Signup', validation.formValadation, (req, res, next)=>{
    signUp.saveUser(req,(err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    });
});


module.exports = route;