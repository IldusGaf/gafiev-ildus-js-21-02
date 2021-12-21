const router = require('express').Router();
const userRouter = require('./usersRouter');
const postRouter = require('./postsRouter');
const commentRouter = require('./commentsRouter');

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/comment', commentRouter)


module.exports = router;
