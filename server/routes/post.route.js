const express = require('express')
const route = express.Router()
// passport
const passport = require('passport')
require('../middlewares/passport')
//controller
const { getPostsController, createPostsController } = require('../controller/post.controller')

//@route GET /v1/api/post
//@des get post
//@access private
route.get('/', passport.authenticate('jwt', { session: false }), getPostsController)

//@route POST /v1/api/post
//@des create post
//@access private
route.post('/', passport.authenticate('jwt', { session: false }), createPostsController)


module.exports = route