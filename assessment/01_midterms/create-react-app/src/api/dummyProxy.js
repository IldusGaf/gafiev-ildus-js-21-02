import {
  USER_LIST_URL,
  POST_LIST_URL,
  PAGE_FIELD,
  LIMIT_FIELD,
  BASE_URL,
  COMMENT_LIST_URL,
} from '../constants/dummyProxy';

async function createGetFetch(path, searchParams) {
  const url = new URL(path, BASE_URL);
  searchParams &&
    Object.entries(searchParams).forEach((params) => {
      url.searchParams.append(params[0], params[1].toString());
    });
  url.search = new URLSearchParams(searchParams).toString();
  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
}

async function createPostFetch(path, data) {
  const url = new URL(path, BASE_URL);
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json;charset=utf-8',
    }),
    body: data,
  });
  return response.json();
}

async function createPutFetch(path, data) {
  const url = new URL(path, BASE_URL);
  const response = await fetch(url, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json;charset=utf-8',
    }),
    body: data,
  });
  return await response.json();
}

export const getUserListApi = (page, limit) => {
  return createGetFetch(USER_LIST_URL, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  });
};

export const updateUserApi = (id, data) => {
  const url = `${USER_LIST_URL}/${id}`;
  const newData = JSON.stringify(data);
  return createPutFetch(url, newData);
};

export const getUserDataApi = (id) => {
  const path = `${USER_LIST_URL}/${id}`;
  return createGetFetch(path);
};

export const addUserApi = (user) => {
  const path = `${USER_LIST_URL}/create`;
  const userData = JSON.stringify(user);
  return createPostFetch(path, userData);
};

export const getPostListApi = (page, limit) => {
  return createGetFetch(POST_LIST_URL, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  });
};

export const getPostListByUserApi = (id, page, limit) => {
  const path = `${POST_LIST_URL}/${id}`;
  return createGetFetch(path, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  });
};

export const getCommentsApi = (postId, page, limit) => {
  const path = `${COMMENT_LIST_URL}/${postId}`;
  return createGetFetch(path, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  });
};
