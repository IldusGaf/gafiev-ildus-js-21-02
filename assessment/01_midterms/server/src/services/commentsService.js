const commentRepository = require('../repositories/commentsRepository');
const logger = require('../logger');
const format = require('string-format');
const { commentService: messages} = require('../constants/loggerMessages');

class CommentService {
    getComments(req, res) {
        logger.info(format(messages.GET_COMMENTS_THIRD_PARTY_PARAMS, req.params.postId, req.query.page, req.query.limit));
        commentRepository.getComments(req.params.postId, req.query.page, req.query.limit)
            .then(response => {
                const result = JSON.stringify(response);
                logger.info(format(messages.GET_COMMENTS_THIRD_PARTY_SUCCESS, result));
                res.status(200).send(result);
            })
            .catch(error => {
                logger.error(format(messages.GET_COMMENTS_THIRD_PARTY_ERROR, error));
                res.status(520).json(error);
            })
    }
}

module.exports = new CommentService();
