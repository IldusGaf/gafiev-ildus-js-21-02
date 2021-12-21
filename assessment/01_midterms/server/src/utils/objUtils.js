const utils = require('./commonUtils');

class ObjUtils {
    changeDatesFormatInSingleObj(obj) {
        return {
            ...obj,
            publishDate: utils.changeDateFormat(obj.publishDate),
        }
    }
}

module.exports = new ObjUtils();
