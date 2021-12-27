const api = require('../api/dummyApi');
const logger = require('../logger');
const format = require('string-format');
const userMapper = require('../mappers/usersMapper');
const { userRepository: messages } = require('../constants/loggerMessages');

class UsersRepository {
    getUserList(page, limit) {
        logger.info(messages.GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_INVOKE);
        return api.getUserListApi(page, limit)
            .then(response => {
                logger.info(format(messages.GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_REPLY_RESULT, JSON.stringify(response)));
                return response;
            })
            .catch(error => {
                logger.error(format(messages.GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_REPLY_ERROR, error));
                Promise.reject(error);
            })
    }
    getUser(id) {
        logger.info(messages.GET_USER_THIRD_PARTY_INVOKE);
        return api.getUserApi(id)
            .then(response => {
                logger.info(format(messages.GET_USER_THIRD_PARTY_REPLY_SUCCESS, JSON.stringify(response)));
                const result = userMapper.changeDatesFormat(response);
                logger.info(format(messages.GET_USER_THIRD_PARTY_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                logger.error(format(messages.GET_USER_THIRD_PARTY_REPLY_ERROR, error));
                Promise.reject(error);
            })
    }
}

module.exports = new UsersRepository();
