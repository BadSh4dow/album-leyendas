require('dotenv').config()
const express = require('express')
const app = express()
const indexRoute = require('./routes/index')
/*const countriesRoute = require('./routes/countries')*/


app.use(express.json())
app.use('/', indexRoute)
app.listen(process.env.APP_PORT,()=>{
    console.log(`La app se encuentra disponible en http://localhost:${process.env.APP_PORT}`)
})

