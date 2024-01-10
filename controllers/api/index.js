const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes.js/index.js');

router.use('/users', userRoutes); 
router.use('/posts', postRoutes); 
router.use('/comments', commentRoutes); 

module.exports = router;