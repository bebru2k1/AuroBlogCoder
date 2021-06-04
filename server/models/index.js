const mongoose = require('mongoose')
const User = require('./User')
const Role = require('./Role')
const Post = require('./Post')

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://BlogGame:${process.env.DB_PASSWORD}@cluster0.peugm.mongodb.net/Cluster0?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true

        })
        console.log('Success Database Okay')
    } catch (error) {
        console.log(error)
    }
}
let db = {}
db.user = User
db.role = Role
db.post = Post
db.connect = connect


module.exports = db