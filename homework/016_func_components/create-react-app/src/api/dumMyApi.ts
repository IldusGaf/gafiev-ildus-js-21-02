import {
  APP_ID_FIELD, APP_ID_VALUE, USER_URL,
} from '../constants/api/dumMyApi';
import { METHOD_GET } from '../constants/api/common';
import { UserListResponse, UserType } from '../types/dumMyApiResponses';

export const getUsersList = (
  page: number,
  limit: number,
  callback: (resp: Array<UserType>) => void,
  errorCallback?: (resp: any) => void,
) => {
  fetch(`${USER_URL}page=${page}&limit=${limit}`, {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  }).then((response) => response.json())
    .then((response: UserListResponse) => callback(response.data))
    .catch(errorCallback);
};
