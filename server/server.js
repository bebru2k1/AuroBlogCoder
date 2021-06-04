require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')

const PORT = process.env.PORT
// connect Db
db.connect()

app.get('/', (req, res) => {
    res.send('Hello Word')
})


app.listen(PORT, () => {
    console.log(`Server run in ${PORT}`)
})