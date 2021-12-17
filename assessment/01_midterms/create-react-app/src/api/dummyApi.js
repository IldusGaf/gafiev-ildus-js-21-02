import { USER_LIST_URL, APP_ID_FIELD, APP_ID_VALUE, POST_LIST_URL } from '../constants/dummyApi';

async function createGetFetch(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  });
  return response.json();
}

async function createPostFetch(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
      'Content-Type': 'application/json;charset=utf-8',
    }),
    body: data,
  });
  return response.json();
}

async function createPutFetch(url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
      'Content-Type': 'application/json;charset=utf-8',
    }),
    body: data,
  });
  return await response.json();
}

export const getUserListApi = (page, limit) => {
  const url = `${USER_LIST_URL}?page=${page}&limit=${limit}`;
  return createGetFetch(url);
};

export const updateUserApi = (id, data) => {
  const url = `${USER_LIST_URL}/${id}`;
  const newData = JSON.stringify(data);
  return createPutFetch(url, newData);
};

export const getUserDataApi = (id) => {
  const url = `${USER_LIST_URL}/${id}`;
  return createGetFetch(url);
};

export const addUserApi = (user) => {
  const url = `${USER_LIST_URL}/create`;
  const userData = JSON.stringify(user);
  return createPostFetch(url, userData);
};

export const getPostListApi = (page, limit) => {
  const url = `${POST_LIST_URL}?page=${page}&limit=${limit}`;
  return createGetFetch(url);
};

export const getPostListByUserApi = (id, page, limit) => {
  const url = `${USER_LIST_URL}/${id}/post?page=${page}&limit=${limit}`;
  return createGetFetch(url);
};

export const getPostByIdApi = (id) => {
  const url = `${POST_LIST_URL}/${id}`;
  return createGetFetch(url);
};

export const getCommentsApi = (postId, page, limit) => {
  const url = `${POST_LIST_URL}/${postId}/comment?page=${page}&limit=${limit}`;
  return createGetFetch(url);
};
