// Dependencies

const express = require('express')
const app = express()

const cors = require('cors')
require('./models')
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require("path")
const PORT = process.env.PORT

const userCtrl = require('./controllers/users')
const productCtrl = require('./controllers/products')
// ... other imports ...

const path = require("path")

// ... other middleware ...
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))


// Middleware

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))

// routes

app.use('/user', userCtrl)
app.use('/product', productCtrl)
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})