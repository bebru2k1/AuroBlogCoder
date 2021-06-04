const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'roles'

    }]
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)