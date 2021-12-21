import { getUserDataApi } from '../api/dummyProxy';

const authUserAction = (user) => ({
  type: 'AUTH_FORM/AUTHORIZE_USER',
  user,
});

const cancelUserAction = () => ({
  type: 'AUTH_MENU/CANCEL_USER',
});

export const authorizeUser = (id) => (dispatch) => {
  getUserDataApi(id).then((response) =>
    response.id ? dispatch(authUserAction(response)) : alert('Ошибка входа! Введите корректный ID!')
  );
};

export const cancelUser = () => (dispatch) => {
  dispatch(cancelUserAction());
};
