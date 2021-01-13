const express = require('express')
const router = express.router()

router.post('/remove-data/:key',(req,res)=>{
    console.log(req.body)
})

module.exports = router