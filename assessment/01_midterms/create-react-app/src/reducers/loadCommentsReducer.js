import produce from 'immer';

const initialState = {
  comments: [],
  total: 0,
  loading: false,
};

const showLoading = (draft) => {
  draft.loading = true;
  return draft;
};

const hideLoading = (draft) => {
  draft.loading = false;
  return draft;
};

const loadComments = (draft, response) => {
  draft.comments = response.data;
  draft.total = response.total;
  return draft;
};

const loadCommentsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'OPEN_POST/SHOW_LOADING':
        return showLoading(draft);
      case 'OPEN_POST/HIDE_LOADING':
        return hideLoading(draft);
      case 'OPEN_POST/LOADING_COMMENTS':
        return loadComments(draft, action.comments);
      default:
        return state;
    }
  });

export default loadCommentsReducer;
