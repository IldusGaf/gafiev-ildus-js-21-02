const changeThemeAction = () => ({
  type: 'THEME_CHANGER/CHANGE_THEME',
});

export const changeTheme = () => (dispatch) => {
  dispatch(changeThemeAction());
};
