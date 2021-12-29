const repository = require('../../src/repositories/postsRepository');
const api = require('../../src/api/dummyApi');

describe('getPostList', () => {
    jest.spyOn(api, 'getPostListApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getPostList should return resolved', (done) => {
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
        repository.getPostList()
            .then(result => {
                expect(result).toEqual({
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
                done();
            });
    });

    test('getPostList should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getPostListApi.mockRejectedValue(errorText);
        repository.getPostList().catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
});

describe('getPostListByUser', () => {
    jest.spyOn(api, 'getPostListByUserApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getPostListByUser should return resolved', (done) => {
        api.getPostListByUserApi.mockResolvedValue({
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
        repository.getPostListByUser()
            .then(result => {
                expect(result).toEqual({
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
                done();
            });
    });

    test('getPostListByUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getPostListByUserApi.mockRejectedValue(errorText);
        repository.getPostListByUser().catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
});
