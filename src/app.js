const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const certificadosRoutes = require('./routes/certificados.routes')

app.get("/", (req, res) => {
    res.status(200).send({"message":"Welcome to my API!"})
})

app.use('/certificados', certificadosRoutes)

module.exports = app