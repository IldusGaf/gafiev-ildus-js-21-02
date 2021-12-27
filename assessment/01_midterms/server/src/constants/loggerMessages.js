module.exports = {
    UsersActions: {
        ADD_USER_INVOKE: '[UsersActions.addUser] invoked dummyApi.addUser new user={}',
        ADD_USER_REPLY_SUCCESS: '[UsersActions.addUser] reply={}',
        ADD_USER_REPLY_ERROR: '[UsersActions.addUser] error={}',
        ADD_USER_REPLY_RESULT: '[UsersActions.addUser] result={}',

        UPDATE_USER_INVOKE: '[UsersActions.updateUser] invoked dummyApi.updateUser user id={} updated data={}',
        UPDATE_USER_REPLY_SUCCESS: '[UsersActions.updateUser] reply={}',
        UPDATE_USER_REPLY_ERROR: '[UsersActions.updateUser] error={}',
        UPDATE_USER_REPLY_RESULT: '[UsersActions.updateUser] result={}',
    },
    userService: {
        GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_PARAMS: '[UsersService.getUserList] page={} limit={}',
        GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_SUCCESS: '[UsersService.getUserList] success status={} response={}',
        GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_ERROR: '[UsersService.getUserList] error status={} response={}',

        GET_USER_THIRD_PARTY_PARAMS: '[UsersService.getUser] id={}',
        GET_USER_THIRD_PARTY_SUCCESS: '[UsersService.getUser] success status={} response={}',
        GET_USER_THIRD_PARTY_ERROR: '[UsersService.getUser] error status={} response={}',

        ADD_USER_PARAMS: '[UsersService.addUser] body={}',
        ADD_USER_SUCCESS: '[UsersService.addUser] success status={} response={}',
        ADD_USER_ERROR: '[UsersService.addUser] error status={} response={}',

        UPDATE_USER_PARAMS: '[UsersService.updateUser] id={} body={}',
        UPDATE_USER_SUCCESS: '[UsersService.updateUser] success status={} response={}',
        UPDATE_USER_ERROR: '[UsersService.updateUser] error status={} response={}',
    },
    postService: {
        GET_POST_LIST_THIRD_PARTY_PARAMS: '[PostsService.getPostList] page={} limit={}',
        GET_POST_LIST_THIRD_PARTY_SUCCESS: '[PostsService.getPostList] success status={} response={}',
        GET_POST_LIST_THIRD_PARTY_ERROR: '[PostsService.getPostList] error status={} response={}',

        GET_POST_LIST_THIRD_PARTY_BY_USER_PARAMS: '[PostsService.getPostListByUser] user id={} page={} limit={}',
        GET_POST_LIST_THIRD_PARTY_BY_USER_SUCCESS: '[PostsService.getPostListByUser] success status={} response={}',
        GET_POST_LIST_THIRD_PARTY_BY_USER_ERROR: '[PostsService.getPostListByUser] error status={} response={}',
    },
    commentService: {
        GET_COMMENTS_THIRD_PARTY_PARAMS: '[CommentsService.getComments] post id={} page={} limit={}',
        GET_COMMENTS_THIRD_PARTY_SUCCESS: '[CommentsService.getComments] success status={} response={}',
        GET_COMMENTS_THIRD_PARTY_ERROR: '[CommentsService.getComments] error status={} response={}',
    },
    userRepository: {
        GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_INVOKE: '[UsersRepository.getUserList] invoked dummyApi.getUserList',
        GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_REPLY_ERROR: '[UsersRepository.getUserList] error={}',
        GET_USER_THIRD_PARTY_LIST_THIRD_PARTY_REPLY_RESULT: '[UsersRepository.getUserList] result={}',

        GET_USER_THIRD_PARTY_INVOKE: '[UsersRepository.getUser] invoked dummyApi.getUser',
        GET_USER_THIRD_PARTY_REPLY_SUCCESS: '[UsersRepository.getUser] reply={}',
        GET_USER_THIRD_PARTY_REPLY_ERROR: '[UsersRepository.getUser] error={}',
        GET_USER_THIRD_PARTY_REPLY_RESULT: '[UsersRepository.getUser] result={}',
    },
    postRepository: {
        GET_POST_LIST_THIRD_PARTY_INVOKE: '[PostsRepository.getPostList] invoked dummyApi.getPostList',
        GET_POST_LIST_THIRD_PARTY_REPLY_SUCCESS: '[PostsRepository.getPostList] reply={}',
        GET_POST_LIST_THIRD_PARTY_REPLY_ERROR: '[PostsRepository.getPostList] error={}',
        GET_POST_LIST_THIRD_PARTY_REPLY_RESULT: '[PostsRepository.getPostList] result={}',

        GET_POST_LIST_THIRD_PARTY_BY_USER_INVOKE: '[PostsRepository.getPostListByUser] invoked dummyApi.getPostListByUser',
        GET_POST_LIST_THIRD_PARTY_BY_USER_REPLY_SUCCESS: '[PostsRepository.getPostListByUser] reply={}',
        GET_POST_LIST_THIRD_PARTY_BY_USER_REPLY_ERROR: '[PostsRepository.getPostListByUser] error={}',
        GET_POST_LIST_THIRD_PARTY_BY_USER_REPLY_RESULT: '[PostsRepository.getPostListByUser] result={}',
    },
    commentRepository: {
        GET_COMMENTS_THIRD_PARTY_INVOKE: '[CommentsRepository.getComments] invoked dummyApi.getComments',
        GET_COMMENTS_THIRD_PARTY_REPLY_SUCCESS: '[CommentsRepository.getComments] reply={}',
        GET_COMMENTS_THIRD_PARTY_REPLY_ERROR: '[CommentsRepository.getComments] error={}',
        GET_COMMENTS_THIRD_PARTY_REPLY_RESULT: '[CommentsRepository.getComments] result={}',
    },
}
