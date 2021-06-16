const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    username: {
        type: String, unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    displayName: {
        type: String,
        required: true,
    }
    ,
    password: { type: String, trim: true },
    authFacebookID: {
        type: String,
        default: null
    },
    authType: {
        type: String,
        default: 'local',
        enum: ['local', 'facebook']
    }
    ,
    photos: {
        type: String,
        default: "https://image.shutterstock.com/z/stock-vector-flat-vector-illustration-in-outline-style-of-a-coder-or-geek-in-programming-participates-in-1053779966.jpg"
    }
    ,
    role: {
        type: Number,
        default: 0
    },

}, { timestamps: true })

module.exports = mongoose.model('users', UserSchema)