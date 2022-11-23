const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Bienvenido a Leyendas de Sudamerica')
})

router.get('/help',(req,res)=>{
    res.send('Esta es la ayuda del servicio')
})

module.exports = router