import {
  APP_ID_FIELD, APP_ID_VALUE, BASE_URL, LIMIT_FIELD, PAGE_FIELD, USER_URL,
} from '../constants/api/dumMyApi';
import { METHOD_GET, METHOD_POST } from '../constants/api/common';
import { ResponseError, UserListResponse, UserType } from '../types/dumMyApiResponses';

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
  url.search = new URLSearchParams(searchParams).toString();
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

function createFetch(path: string, data: any, callback: any) {
  const url = new URL(path, BASE_URL);
  fetch(url.toString(), {
    method: METHOD_POST,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
      'Content-Type': 'application/json',
    }),
    body: data,
  }).then((response) => response.json())
    .then((response) => callback(response))
    .catch(console.error);
}

export const addUser = (
  user: { firstName: string; lastName: string; gender: string; phone: string; title: string; email: string },
  callback: (resp: UserType) => void,
) => {
  const userData = JSON.stringify(user);
  createFetch(`${USER_URL}/create`, userData, callback);
};
