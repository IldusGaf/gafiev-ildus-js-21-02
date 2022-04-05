import {
  APP_ID_FIELD, APP_ID_VALUE, LIMIT_FIELD, PAGE_FIELD, USER_URL,
} from '../constants/api/dummyAPI';
import { METHOD_GET } from '../constants/api/common';
import { UserListResponse, UserType } from '../types/dummyAPIResponses';

export const getUserList = (
  page: number,
  limit: number,
  callback: (resp: Array<UserType>) => void,
  errorCallback: (resp: any) => void,
) => {
  fetch(`${USER_URL}?${PAGE_FIELD}=${page}&${LIMIT_FIELD}=${limit}`, {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  }).then((response) => response.json())
    .then((json: UserListResponse) => callback(json.data))
    .catch(errorCallback);
};
