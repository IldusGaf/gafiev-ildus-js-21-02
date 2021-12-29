const request = require('supertest');
const app = require('../../src/app');
const api = require('../../src/api/dummyApi');

jest.mock('../../src/api/dummyApi');

describe('getPostList', () => {
    test('getPostList should return post list', async () => {
        api.getPostListApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                    owner: {
                        name: 'Allen'
                    }
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-05-24T14:53:17.598Z',
                    owner: {
                        name: 'Ararat'
                    }
                }
            ]
        });
        const result = await request(app)
            .get('/post')
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '26.11.2020',
                    owner: {
                        name: 'Allen'
                    }
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '24.05.2020',
                    owner: {
                        name: 'Ararat'
                    }
                }
            ]
        });
    });

    test('getPostList should return error', async () => {
        const errorText = 'Some error';
        api.getPostListApi.mockRejectedValue(errorText);
        const result = await request(app)
            .get('/post')
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});

describe('getPostListByUser', () => {
    test('getPostListByUser should return post list by user id', async () => {
        const userId = 123;
        api.getPostListByUserApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-11-25T21:56:06.020Z',
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '2020-05-24T14:53:17.598Z',
                }
            ]
        });
        const result = await request(app)
            .get(`/post/${userId}`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            data: [
                {
                    id: 123,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '26.11.2020',
                },
                {
                    id: 456,
                    text: 'Lorem ipsum dolor sit amet',
                    publishDate: '24.05.2020',
                }
            ]
        });
    });

    test('getPostListByUser should return error', async () => {
        const userId = 123;
        const errorText = 'Some error';
        api.getPostListByUserApi.mockRejectedValue(errorText);
        const result = await request(app)
            .get(`/post/${userId}`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});
