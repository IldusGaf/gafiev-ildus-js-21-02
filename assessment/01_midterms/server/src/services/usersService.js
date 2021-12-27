const userRepository = require('../repositories/usersRepository');
const userActions = require('../actions/usersActions');
const logger = require('../logger');
const format = require('string-format');
const { userService: messages} = require('../constants/loggerMessages');

class UsersService {
    getUserList(req, res) {
        logger.info(format(messages.GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_PARAMS, req.query.page, req.query.limit));
        userRepository.getUserList(req.query.page, req.query.limit)
            .then(response => {
                const result = JSON.stringify(response);
                logger.info(format(messages.GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_SUCCESS, 200, result));
                res.status(200).send(result);
            })
            .catch(error => {
                logger.error(format(messages.GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_ERROR, 520, error));
                res.status(520).json(error);
            })
    }
    getUser(req, res) {
        logger.info(format(messages.GET_USER_THIRD_PARTY_PARAMS, req.params.id));
        userRepository.getUser(req.params.id)
            .then(response => {
                const result = JSON.stringify(response);
                logger.info(format(messages.GET_USER_THIRD_PARTY_SUCCESS, 200, result));
                res.status(200).send(result);
            })
            .catch(error => {
                logger.error(format(messages.GET_USER_THIRD_PARTY_ERROR, 520, error));
                res.status(520).json(error);
            })
    }
    addUser(req, res) {
        logger.info(format(messages.ADD_USER_PARAMS, JSON.stringify(req.body)));
        userActions.addUser(req.body)
            .then(response => {
                const result = JSON.stringify(response);
                logger.info(format(messages.ADD_USER_SUCCESS, 200, result));
                res.status(200).send(result);
            })
            .catch(error => {
                logger.error(format(messages.ADD_USER_ERROR, 520, error));
                res.status(520).json(error);
            })
    }
    updateUser(req, res) {
        logger.info(format(messages.UPDATE_USER_PARAMS, req.params.id, JSON.stringify(req.body)));
        userActions.updateUser(req.params.id, req.body)
            .then(response => {
                const result = JSON.stringify(response);
                logger.info(format(messages.UPDATE_USER_SUCCESS, 200, result));
                res.status(200).send(result);
            })
            .catch(error => {
                logger.error(format(messages.UPDATE_USER_ERROR, 520, error));
                res.status(520).json(error);
            })
    }
}

module.exports = new UsersService;
