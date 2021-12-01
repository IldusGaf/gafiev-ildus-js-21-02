import produce from 'immer';

const initialState = {
  authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : {},
  authorized: !!localStorage.getItem('authUser'),
};

const setAuthUser = (draft, user) => {
  localStorage.setItem('authUser', JSON.stringify(user));
  draft.authUser = user;
  draft.authorized = true;
  return draft;
};

const cancelUser = (draft) => {
  localStorage.removeItem('authUser');
  draft.authUser = {};
  draft.authorized = false;
  return draft;
};

const authorizationReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'AUTH_FORM/AUTHORIZE_USER':
        return setAuthUser(draft, action.user);
      case 'AUTH_MENU/CANCEL_USER':
        return cancelUser(draft);
      default:
        return state;
    }
  });

export default authorizationReducer;
