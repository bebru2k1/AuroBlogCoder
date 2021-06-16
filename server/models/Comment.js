const mongoose = require('mongoose')
const { Schema } = mongoose

const CommentSchema = new Schema({
    des: {
        type: String,
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }
}, { timestamps: true })

module.exports = mongoose.model('Comment', CommentSchema)