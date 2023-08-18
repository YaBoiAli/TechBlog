const router = require('express');
const userRoutes = require('./user-routes')
const postRoutes = require('./post-routes')
const commentRoutes = require('./comment-routes')

router.user('/user', userRoutes)

router.user('/post', postRoutes)

router.user('/comment', commentRoutes)

module.exports = router