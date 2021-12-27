const postRepository = require('../repositories/postsRepository');
const logger = require('../logger');
const format = require('string-format');
const { postService: messages} = require('../constants/loggerMessages');

class PostsService {
    getPostList(req, res) {
        logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_PARAMS, req.query.page, req.query.limit));
        postRepository.getPostList(req.query.page, req.query.limit)
            .then(response => {
                const result = JSON.stringify(response);
                logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_SUCCESS, result));
                res.status(200).send(result);
            })
            .catch(error => {
                logger.error(format(messages.GET_POST_LIST_THIRD_PARTY_ERROR, error));
                res.status(520).json(error);
            })
    }
    getPostListByUser(req, res) {
        logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_BY_USER_PARAMS, req.params.userId, req.query.page, req.query.limit));
        postRepository.getPostListByUser(req.params.userId, req.query.page, req.query.limit)
            .then(response => {
                const result = JSON.stringify(response);
                logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_BY_USER_SUCCESS, result));
                res.status(200).send(result);
            })
            .catch(error => {
                logger.error(format(messages.GET_POST_LIST_THIRD_PARTY_BY_USER_ERROR, error));
                res.status(520).json(error);
            })
    }
}

module.exports = new PostsService();
