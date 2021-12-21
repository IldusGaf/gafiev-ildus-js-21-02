const usersObj = require('../utils/usersObjUtils');

class UsersMapper {
    changeDatesFormat(user) {
        return usersObj.changeDatesFormat(user);
    }
    convertDateToIsoString(user) {
        return usersObj.convertDateToIsoString(user);
    }
}

module.exports = new UsersMapper();
