const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

router.post('/save-data/:key',(req,res)=>{
    
})
router.get('/save-data/',(req,res)=>{
    res.send("You are not allowed Here tresspasser")
})

module.exports = router