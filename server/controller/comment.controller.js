const db = require('../models')
const Post = db.post
const User = db.user
const Comment = db.comment

module.exports.createCommentController = async (req, res) => {
    const { content, postId } = req.body

    const hasPost = await Post.findById(postId)

    if (hasPost) {
        const newComment = new Comment({
            content,
            user: req.user._id,
            post: postId
        })
        await newComment.save()

        return res.status.json({
            message: 'Create comment success'
        })
    }

}
