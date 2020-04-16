//create entry point
let express = require('express');
let app = express();
let portNumber= 8000;

//import and mount route
let api = require('./routes/api');
app.use('/api',api);

//listen on port
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})
