require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')
const authRoute = require('./routes/auth.route')
const postsRoute = require('./routes/post.route')
const Role = db.role
const PORT = process.env.PORT
// connect Db
db.connect()

app.use(express.json())


app.use('/v1/api/auth', authRoute)
app.use('/v1/api/posts', postsRoute)


app.listen(PORT, () => {
    console.log(`Server run in ${PORT}`)
})