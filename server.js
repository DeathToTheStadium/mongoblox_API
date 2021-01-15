// Written by Joseph

//--> IMPORTS
//>> Settings
require('dotenv')
const Config = require('./CLASSES/Configuration/settings')
const routes = require('./API/routes')
//>>Network
const express = require('express')
const axios = require('axios');
//>>Utililties
const body_parser = require('body-parser')
const fs = require('fs')

//-->initializations
const app = express()

//>> routes and Setup
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
app.use(routes.Set)
app.use(routes.Get)
app.use(routes.Del)
app.use(routes.Auth)

app.listen(Config.server.port,()=>{
  console.log(`SERVER IS RUNNING ON PORT:${Config.server.port}`)
})
