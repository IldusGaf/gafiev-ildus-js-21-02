const api = require('../api/dummyApi');
const commentMapper = require('../mappers/commentsMapper');
const logger = require('../logger');
const format = require('string-format');
const { commentRepository: messages} = require('../constants/loggerMessages');

class CommentsRepository {
    getComments(id, page, limit) {
        logger.info(messages.GET_COMMENTS_THIRD_PARTY_INVOKE);
        return api.getCommentsApi(id, page, limit)
            .then(response => {
                logger.info(format(messages.GET_COMMENTS_THIRD_PARTY_REPLY_SUCCESS, JSON.stringify(response)));
                const result = commentMapper.changeDatesFormat(response);
                logger.info(format(messages.GET_COMMENTS_THIRD_PARTY_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                logger.error(format(messages.GET_COMMENTS_THIRD_PARTY_REPLY_ERROR, error));
                Promise.reject(error);
            })
    }
}

module.exports = new CommentsRepository();
