import { addUserApi } from '../api/dummyProxy';

const addUserAction = (userId) => ({
  type: 'REG_FORM/ADD_USER',
  userId,
});

const preventRedirectAction = () => ({
  type: 'REG_FORM/PREVENT_REDIRECT',
});

export const addNewUser = (user) => (dispatch) => {
  addUserApi(user).then((response) => dispatch(addUserAction(response.id)));
};

export const preventRedirect = () => (dispatch) => {
  dispatch(preventRedirectAction());
};
