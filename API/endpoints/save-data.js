const express = require('express')
const router = express.router()

router.post('/save-data/:key',(req,res)=>{
    console.log(req.body)
})

module.exports = router