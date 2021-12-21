const fetch = require('node-fetch');
const { USER_LIST_URL, POST_LIST_URL, APP_ID_VALUE, APP_ID_FIELD, METHOD } = require('../constants/dummyApi');

const createGetFetch = (url) => {
    return fetch(url, {
        method: METHOD.GET,
        headers: {
            [APP_ID_FIELD]: APP_ID_VALUE
        },
    })
    .then(response => response.json());  
}

const createFetchWith = (url, method, data) => {
    return fetch(url, {
        method: method,
        headers: {
            [APP_ID_FIELD]: APP_ID_VALUE,
            'Content-Type': 'application/json'
        },
        body: data,
    })
    .then(response => response.json());
}

module.exports = {
    getUserListApi: (page, limit) => {
        const url = USER_LIST_URL + `?page=${page}&limit=${limit}`;
        return createGetFetch(url);
    },
    getUserApi: (id) => {
        const url = USER_LIST_URL + `/${id}`;
        return createGetFetch(url);
    },
    addUserApi: (user) => {
        const url = USER_LIST_URL + `/create`;
        const userData = JSON.stringify(user);
        return createFetchWith(url, METHOD.POST, userData);
    },
    updateUserApi: (id, data) => {
        const url = USER_LIST_URL + `/${id}`;
        const newData = JSON.stringify(data);
        return createFetchWith(url, METHOD.PUT, newData);
    },
    getPostListApi: (page, limit) => {
        const url = POST_LIST_URL + `?page=${page}&limit=${limit}`;
        return createGetFetch(url);
    },
    getPostListByUserApi: (id, page, limit) => {
        const url = USER_LIST_URL + `/${id}/post?page=${page}&limit=${limit}`;
        return createGetFetch(url);
    },
    getCommentsApi: (postId, page, limit) => {
        const url = POST_LIST_URL + `/${postId}/comment?page=${page}&limit=${limit}`;
        return createGetFetch(url);
    },
}
