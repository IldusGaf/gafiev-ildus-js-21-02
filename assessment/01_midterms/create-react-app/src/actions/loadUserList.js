import { getUserListApi } from '../api/dummyApi';

const showLoadingAction = () => ({
  type: 'USER_LIST/SHOW_LOADING',
});

const hideLoadingAction = () => ({
  type: 'USER_LIST/HIDE_LOADING',
});

const loadingUserListAction = (userList) => ({
  type: 'USER_LIST/LOADING_USER_LIST_SUCCESS',
  userList,
});

export const loadUserList = (page, limit) => (dispatch) => {
  dispatch(showLoadingAction());
  getUserListApi(page, limit)
    .then((response) => dispatch(loadingUserListAction(response)))
    .finally(() => dispatch(hideLoadingAction()));
};
