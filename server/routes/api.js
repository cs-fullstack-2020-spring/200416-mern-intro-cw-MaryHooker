//create route
let express = require('express');
let router = express.Router();
//import json middleware
router.use(express.json());

//Create a character endpoint
router.post('/',(req,res)=>{
    res.send(`Created a character`)
})

//Read all characters endpoint
router.get('/',(req,res)=>{
    res.send(`Read all characters`)
})

//export route
module.exports = router;