const express = require('express')
const router = express.Router()
const axios = require('axios');
const https = require('https')
require('dotenv').config()

function send(req,res,next){
    axios({
        method: 'get',
        url: 'http://localhost:2000',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      })
    .then((resp)=>{
       res.json(resp)
    }).catch((error)=>{
        // console.log(error.response.data)
        // console.log(error.response)
        res.send(error.response)
    })
}

router.get('/login/:serverid&:password',(req,res,next)=>{
    if (req.params.serverid == process.env.SERVERID && req.params.password == process.env.PASSWORD) {
        console.log('worked')
        next()
    }else res.send('Failed')
},send)

module.exports = router