const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const certificadosRoutes = require('./routes/certificados.routes')

app.use('/certificados', certificadosRoutes)

module.exports = app