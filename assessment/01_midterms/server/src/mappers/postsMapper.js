const objUtils = require('../utils/objUtils');

class PostsMapper {
    changeDatesFormat(postList) {
        return {
            ...postList,
            data: postList.data.map(post => objUtils.changeDatesFormatInSingleObj(post)),
        }
    }
}

module.exports = new PostsMapper();
