const api = require('../../src/api/dummyApi');
const fetch = require('node-fetch');

jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
    json: () => ({
        data: 'api response',
    })
})));

describe('getUserListApi', () => {
    test('getUserListApi should return object', () => {
        expect(api.getUserListApi()).toEqual(expect.any(Object));
    });

    test('getUserListApi should call fetch with params', () => {
        const pageParam = 'page';
        const limitParam = 'limit'
        const page = 2;
        const limit = 10;
        api.getUserListApi(page, limit);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user?${pageParam}=${page}&${limitParam}=${limit}`,
            {method: 'GET', headers: {'app-id': '617b11efbdaa719034cf6d83'}}
        )
    });

    test('getUserListApi should return promise with response.data', () => {
        const result = api.getUserListApi(2, 10);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual('api response');
    });
})

describe('getPostListApi', () => {
    test('getPostListApi should return object', () => {
        expect(api.getPostListApi()).toEqual(expect.any(Object));
    });

    test('getPostListApi should call fetch with params', () => {
        const pageParam = 'page';
        const limitParam = 'limit'
        const page = 2;
        const limit = 10;
        api.getPostList(page, limit);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/post?${pageParam}=${page}&${limitParam}=${limit}`,
            {method: 'GET', headers: {'app-id': '617b11efbdaa719034cf6d83'}}
        )
    });

    test('getPostListApi should return promise with response.data', () => {
        const result = api.getPostListApi(2, 10);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual('api response');
    });
})

describe('getPostListByUserApi', () => {
    test('getPostListByUserApi should return object', () => {
        expect(api.getPostListByUserApi()).toEqual(expect.any(Object));
    });

    test('getPostListByUserApi should call fetch with params', () => {
        const userId = 123;
        const pageParam = 'page';
        const limitParam = 'limit'
        const page = 2;
        const limit = 10;
        api.getPostListByUserApi(userId, page, limit);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/${userId}/post?${pageParam}=${page}&${limitParam}=${limit}`,
            {method: 'GET', headers: {'app-id': '617b11efbdaa719034cf6d83'}}
        )
    });

    test('getPostListByUserApi should return promise with response.data', () => {
        const result = api.getPostListByUserApi(123, 2, 10);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual('api response');
    });
})

describe('getCommentsApi', () => {
    test('getCommentsApi should return object', () => {
        expect(api.getCommentsApi()).toEqual(expect.any(Object));
    });

    test('getCommentsApi should call fetch with params', () => {
        const postId = 123;
        const pageParam = 'page';
        const limitParam = 'limit'
        const page = 2;
        const limit = 10;
        api.getCommentsApi(postId, page, limit);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/post/${postId}/comment?${pageParam}=${page}&${limitParam}=${limit}`,
            {method: 'GET', headers: {'app-id': '617b11efbdaa719034cf6d83'}}
        )
    });

    test('getCommentsApi should return promise with response.data', () => {
        const result = api.getCommentsApi(123, 2, 10);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual('api response');
    });
})

jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
    json: () => ({
        id: '123',
        firstName: 'Allen',
        lastName: 'Bradley'
    })
})));

describe('getUserApi', () => {
    test('getUserApi should return object', () => {
        expect(api.getUserApi()).toEqual(expect.any(Object));
    });

    test('getUserApi should call fetch with user id', () => {
        const id = '123'
        api.getUserApi(id);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/${id}`,
            {method: 'GET', headers: {'app-id': '617b11efbdaa719034cf6d83'}}
        )
    });

    test('getUserApi should return promise with user data', () => {
        const result = api.getUserApi(123);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual({
            id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
        });
    });
})

describe('addUserApi', () => {
    test('addUserApi should return object', () => {
        expect(api.addUserApi()).toEqual(expect.any(Object));
    });

    test('addUserApi should call fetch with new user data ', () => {
        const user = {
            id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
        }
        const stringifyedUser = JSON.stringify(user);
        api.addUserApi(user);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/create`,
            {method: 'POST', headers: {'app-id': '617b11efbdaa719034cf6d83', 'Content-Type': 'application/json'}, body: stringifyedUser}
        )
    });

    test('addUserApi should return promise with new user data', () => {
        const result = api.addUserApi(123);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual({
            id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
        });
    });
})

describe('updateUserApi', () => {
    test('updateUserApi should return object', () => {
        expect(api.updateUserApi()).toEqual(expect.any(Object));
    });

    test('updateUserApi should call fetch with updated user data ', () => {
        const id = '123';
        const data = {
            firstName: 'Allen',
            lastName: 'Bradley'
        }
        const stringifyedData = JSON.stringify(data);
        api.updateUserApi(id, data);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/${id}`,
            {method: 'PUT', headers: {'app-id': '617b11efbdaa719034cf6d83', 'Content-Type': 'application/json'}, body: stringifyedData}
        )
    });

    test('updateUserApi should return promise with updated user data', () => {
        const id = '123';
        const data = {
            firstName: 'Allen',
            lastName: 'Bradley'
        }
        const result = api.updateUserApi(id, data);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual({
            id: '123',
            firstName: 'Allen',
            lastName: 'Bradley'
        });
    });
})
