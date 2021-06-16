const db = require('../models')
const Post = db.post
const User = db.user
module.exports.getPostsController = async (req, res) => {
    const posts = await Post.find({ user: req.user._id }).populate('users')
    console.log(posts)
}

module.exports.createPostsController = async (req, res) => {
    if (!req.body.title) return res.status(400).json({
        success: true,
        message: 'title is required'
    })
    const newPost = new Post({
        ...req.body,
        user: req.user._id
    })
    await newPost.save()
    res.status(200).json({
        success: true,
        message: "Create Post Success , Oke :))"
    })
}