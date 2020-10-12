const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const routeNavigator = require('./src/')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

app.use('/api/v1', routeNavigator)

app.listen(8000, () => {
    console.log("Listening on port 8000")
})