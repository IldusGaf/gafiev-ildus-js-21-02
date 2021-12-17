import produce from 'immer';

const initialState = {
  postList: [],
  total: 0,
  loading: false,
  post: {},
  isOpen: false,
};

const showLoading = (draft) => {
  draft.loading = !draft.loading;
  return draft;
};

const hideLoading = (draft) => {
  draft.loading = false;
  return draft;
};

const loadPostListSuccess = (draft, response) => {
  draft.postList = response.data;
  draft.total = response.total;
  return draft;
};

const ViewPost = (draft, response) => {
  draft.post = response;
  draft.isOpen = true;
  return draft;
};

const closePost = (draft) => {
  draft.isOpen = false;
  return draft;
};

const postListReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'POST_LIST/SHOW_LOADING':
        return showLoading(draft);
      case 'POST_LIST/HIDE_LOADING':
        return hideLoading(draft);
      case 'POST_LIST/LOADING_POST_LIST_SUCCESS':
        return loadPostListSuccess(draft, action.postList);
      case 'POST_PREVIEW/OPEN_POST':
        return ViewPost(draft, action.post);
      case 'POST_PREVIEW/CLOSE_POST':
        return closePost(draft);
      default:
        return state;
    }
  });

export default postListReducer;
