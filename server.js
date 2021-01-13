// Written by Joseph

//--> IMPORTS
const settings = require('./CLASSES/settings')
const express = require('express')
const mongoose = require('mongoose')
const body_parser = require('body-parser')

//-->initializations
const app = express()

//-->functions

app.listen(settings.server.portNumber,function(req,res){
    let log = `Server is now running on port:${settings.server.portNumber}`
    console.log(log)
})