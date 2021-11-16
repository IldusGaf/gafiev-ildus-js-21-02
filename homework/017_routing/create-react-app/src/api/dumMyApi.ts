import {
  APP_ID_FIELD, APP_ID_VALUE, BASE_URL, LIMIT_FIELD, PAGE_FIELD, USER_URL,
} from '../constants/api/dumMyApi';
import { METHOD_GET } from '../constants/api/common';
import { ResponseError, UserListResponse, UserType } from '../types/dumMyApiResponses';

// export const getUsersList = (
//   page: number,
//   limit: number,
//   callback: (resp: Array<UserType>) => void,
//   errorCallback?: (resp: any) => void,
// ) => {
//   fetch(`${USER_URL}page=${page}&limit=${limit}`, {
//     method: METHOD_GET,
//     headers: new Headers({
//       [APP_ID_FIELD]: APP_ID_VALUE,
//     }),
//   }).then((response) => response.json())
//     .then((response: UserListResponse) => callback(response.data))
//     .catch(errorCallback);
// };

const doGetRequest = <T>(
  path: string,
  callback: (resp: T) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
  searchParams?: Record<string, any>,
) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  // url.search = new URLSearchParams(searchParams).toString();
  fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

export const getUsersList = (
  page: number,
  limit: number,
  callback: (resp: Array<UserType>) => void,
  errorCallback?: (resp: any) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(
    USER_URL,
    (resp: UserListResponse) => callback(resp.data),
    errorCallback,
    finalCallback,
    {
      [PAGE_FIELD]: page,
      [LIMIT_FIELD]: limit,
    },
  );
};

export const getUserById = (
  id: string,
  callback: (resp: UserType) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
) => {
  doGetRequest(`${USER_URL}/${id}`, callback, errorCallback, finalCallback);
};
