const router = require('express').Router();
const commentService = require('../services/commentsService');

router.get('/:postId', commentService.getComments);

module.exports = router;
