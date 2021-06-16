const db = require('../models')
const Post = db.post
const User = db.user
module.exports.getPostsController = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('user', 'displayName')

        if (!posts) return res.status(400).json({
            message: 'Canot Get Post'
        })
        res.status(200).json({
            success: true,
            message: "Get Post Success",
            posts
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

module.exports.createPostsController = async (req, res) => {
    try {
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
            message: "Create Post Success , Oke :))",
            posts: newPost
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports.putPostsController = async (req, res) => {
    try {
        const { id } = req.params
        const { title, des, image } = req.body
        if (!(!title || !des || !image)) return res.status(400).json({
            success: false,
            message: "Title/Des/Image has adlready exist"
        })
        const newPosts = await Post.findByIdAndUpdate(id, {
            title, des, image
        }, { new: true })
        console.log('newposts', newPosts)
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}


module.exports.deletePostsController = async (req, res) => {
    try {
        const { id } = req.params

        const newDeletePost = await Post.findByIdAndDelete({ _id: id })
        if (!newDeletePost) return res.status(400).json({
            success: false,
            message: "Canot Delete Posts"
        })

        res.status(200).json({
            success: true,
            message: 'Delete Post Success',
            posts: newDeletePost
        })
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}
