import { getUserDataApi, getPostListByUserApi, updateUserApi } from '../api/dummyProxy';

const showUserLoadingAction = () => ({
  type: 'USER/SHOW_LOADING',
});

const hideUserLoadingAction = () => ({
  type: 'USER/HIDE_LOADING',
});

const loadingUserDataAction = (userData) => ({
  type: 'USER/LOADING_USER_DATA',
  userData,
});

const showPostsLoadingAction = () => ({
  type: 'USER/SHOW_POSTS_LOADING',
});

const hidePostsLoadingAction = () => ({
  type: 'USER/HIDE_POSTS_LOADING',
});

const loadingUserPostList = (postList) => ({
  type: 'USER/LOADING_USER_POST_LIST',
  postList,
});

const updateUserDataAction = (userData) => ({
  type: 'EDIT_PROFILE/UPDATE_USER_DATA',
  userData,
});

const openEditorAction = () => ({
  type: 'EDIT_PROFILE/OPEN_EDITOR',
});

const closeEditorAction = () => ({
  type: 'EDIT_PROFILE/CLOSE_EDITOR',
});

export const loadUserData = (id) => (dispatch) => {
  dispatch(showUserLoadingAction());
  getUserDataApi(id)
    .then((response) => dispatch(loadingUserDataAction(response)))
    .finally(() => dispatch(hideUserLoadingAction()));
};

export const loadUserPostList = (id, page, limit) => (dispatch) => {
  dispatch(showPostsLoadingAction());
  getPostListByUserApi(id, page, limit)
    .then((response) => dispatch(loadingUserPostList(response)))
    .finally(() => dispatch(hidePostsLoadingAction()));
};
export const updateUserData = (id, data) => (dispatch) => {
  updateUserApi(id, data).then((response) => dispatch(updateUserDataAction(response)));
};

export const openEditor = () => (dispatch) => {
  dispatch(openEditorAction());
};

export const closeEditor = () => (dispatch) => {
  dispatch(closeEditorAction());
};
