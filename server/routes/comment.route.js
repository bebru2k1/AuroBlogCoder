const express = require('express')
const route = express.Router()

const { createCommentController } = require('../controller/comment.controller')
const passport = require('passport')
require('../middlewares/passport')
const { isAdmin } = require('../middlewares/isAdmin')



//@route GET /v1/ap1/comments/
//@des create new user
//@access Public
route.post('/', passport.authenticate('jwt', { session: false }), createCommentController)



module.exports = route