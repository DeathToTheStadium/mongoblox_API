// Written by Joseph

//--> IMPORTS
const settings = require('./CLASSES/settings')
const express = require('express')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const jsonwbtoken = require('jsonwebtoken')
const limiter     = require('express-rate-limit')
const routes      = require('./API/routes')
//-->initializations
const app = express()


var token = jsonwbtoken.sign({
    name:"Dude",
    data:["data1","data2","data1","data2"]
},'secret')

//-->functions

app.use(body_parser.json({}))
app.use(body_parser.urlencoded({extended:true}))
app.use(routes.Get)
app.use(routes.Set)
app.use(routes.Del)


app.get('/',async(req,res)=>{
    res.redirect("https://google.com")
})


app.listen(settings.server.portNumber,function(req,res){
    let log = `Server is now running on port:${settings.server.portNumber}`
    console.log(log)
})