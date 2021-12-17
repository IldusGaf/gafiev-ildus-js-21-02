import { getCommentsApi } from '../api/dummyApi';

const showLoadingAction = () => ({
  type: 'OPEN_POST/SHOW_LOADING',
});

const hideLoadingAction = () => ({
  type: 'OPEN_POST/HIDE_LOADING',
});

const loadingCommentsAction = (comments) => ({
  type: 'OPEN_POST/LOADING_COMMENTS',
  comments,
});

export const loadComments = (id, page, limit) => (dispatch) => {
  dispatch(showLoadingAction());
  getCommentsApi(id, page, limit)
    .then((response) => dispatch(loadingCommentsAction(response)))
    .finally(() => dispatch(hideLoadingAction()));
};
