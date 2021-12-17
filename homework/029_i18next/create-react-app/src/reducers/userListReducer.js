import produce from 'immer';

const initialState = {
  userList: [],
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

const loadUserList = (draft, response) => {
  draft.userList = response.data;
  draft.total = response.total;
  return draft;
};

const userListReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'USER_LIST/SHOW_LOADING':
        return showLoading(draft);
      case 'USER_LIST/HIDE_LOADING':
        return hideLoading(draft);
      case 'USER_LIST/LOADING_USER_LIST_SUCCESS':
        return loadUserList(draft, action.userList);
      default:
        return state;
    }
  });

export default userListReducer;
