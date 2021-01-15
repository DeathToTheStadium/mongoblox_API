// Written by Joseph

//--> IMPORTS
const express = require('express')
const Config = require('./CLASSES/Configuration/settings')
//-->initializations
const app = express()
var count = 0
app.get('/',(req,res)=>{
    count += 1
})

app.listen(Config.authserver.port,()=>{
    console.log(`SEVER IS RUNNING ON PORT:${Config.authserver.port}`)
})
