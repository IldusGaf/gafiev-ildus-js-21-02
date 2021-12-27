const api = require('../api/dummyApi');
const postMapper = require('../mappers/postsMapper');
const logger = require('../logger');
const format = require('string-format');
const { postRepository: messages} = require('../constants/loggerMessages');

class PostsRepository {
    getPostList(page, limit) {
        logger.info(messages.GET_POST_LIST_THIRD_PARTY_INVOKE);
        return api.getPostListApi(page, limit)
            .then(response => {
                logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_REPLY_SUCCESS, JSON.stringify(response)));
                const result = postMapper.changeDatesFormat(response);
                logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                logger.error(format(messages.GET_POST_LIST_THIRD_PARTY_REPLY_ERROR, error));
                Promise.reject(error);
            })
    }
    getPostListByUser(id, page, limit) {
        logger.info(messages.GET_POST_LIST_THIRD_PARTY_BY_USER_INVOKE);
        return api.getPostListByUserApi(id, page, limit)
            .then(response => {
                logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_BY_USER_REPLY_SUCCESS, JSON.stringify(response)));
                const result = postMapper.changeDatesFormat(response);
                logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_BY_USER_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                logger.error(format(messages.GET_POST_LIST_THIRD_PARTY_BY_USER_REPLY_ERROR, error));
                Promise.reject(error);
            })
    }
}

module.exports = new PostsRepository();
