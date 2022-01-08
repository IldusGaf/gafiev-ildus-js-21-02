const api = require('../api/dummyApi');
const userMapper = require('../mappers/usersMapper');
const logger = require('../logger');
const format = require('string-format');
const { usersActions: messages } = require('../constants/loggerMessages');

class UsersActions {
    addUser(user) {
        logger.info(format(messages.ADD_USER_INVOKE, JSON.stringify(user)));
        const mappedUser = userMapper.convertDateToIsoString(user);
        return api.addUserApi(mappedUser)
            .then(response => {
                logger.info(format(messages.ADD_USER_REPLY_SUCCESS, JSON.stringify(response)));
                const result = userMapper.changeDatesFormat(response);
                logger.info(format(messages.ADD_USER_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                logger.error(format(messages.ADD_USER_REPLY_ERROR, error));
                return Promise.reject(error);
            })
    }
    updateUser(id, data) {
        logger.info(format(messages.UPDATE_USER_INVOKE, id, JSON.stringify(data)));
        const mappedData = userMapper.convertDateToIsoString(data);
        return api.updateUserApi(id, mappedData)
            .then(response => {
                logger.info(format(messages.UPDATE_USER_REPLY_SUCCESS, JSON.stringify(response)));
                const result = userMapper.changeDatesFormat(response);
                logger.info(format(messages.UPDATE_USER_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                logger.error(format(messages.ADD_USER_REPLY_ERROR, error));
                return Promise.reject(error);
            })
    }
}

module.exports = new UsersActions();
