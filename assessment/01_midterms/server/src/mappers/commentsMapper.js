const objUtils = require('../utils/objUtils');

class CommentsMapper {
    changeDatesFormat(commentList) {
        return {
            ...commentList,
            data: commentList.data.map(comment => objUtils.changeDatesFormatInSingleObj(comment)),
        }
    }
}

module.exports = new CommentsMapper();
