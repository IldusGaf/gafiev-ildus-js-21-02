const router = require('express').Router();
const postService = require('../services/postsService');

router.get('', postService.getPostList);
router.get('/:userId', postService.getPostListByUser);

module.exports = router;
