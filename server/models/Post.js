const mongoose = require('mongoose')
const { Schema } = mongoose

const PostSchema = new Schema({
    title: { type: String, required: true },
    des: { type: String },
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema)