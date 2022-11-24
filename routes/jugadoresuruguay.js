const express = require('express')
const router = express.Router();

const db = require("../models")
const jugadoresuruguay = db.jugadoresuruguay


router.get('/',(req,res)=>{
    jugadoresuruguay.findAll().then(data=>{
        res.send(data)
    })
})

router.get('/arqueros',(req,res)=>{
    res.send('Arqueros de Uruguay')
})


module.exports = router