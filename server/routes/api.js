//create route
let express = require('express');
let router = express.Router();
//import json middleware
router.use(express.json());

//import model
let CharacterCollection = require('../models/CharacterSchema');

//Create a character endpoint
router.post('/',(req,res)=>{
    // res.send(`Created a character`)
    CharacterCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all characters endpoint
router.get('/',(req,res)=>{
    // res.send(`Read all characters`)
    CharacterCollection.find({},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//export route
module.exports = router;