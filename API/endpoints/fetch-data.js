const express = require('express')
const router = express.Router()

router.post('/fetch-data/:key',(req,res)=>{
    console.log(req.body)
})

module.exports = router