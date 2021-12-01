import produce from 'immer';

const initialState = {
  darkTheme: false,
};

const changeTheme = (draft) => {
  draft.darkTheme = !draft.darkTheme;
  return draft;
};

const changeThemeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'THEME_CHANGER/CHANGE_THEME':
        return changeTheme(draft);
      default:
        return state;
    }
  });

export default changeThemeReducer;
