const repository = require('../../src/repositories/commentsRepository');
const api = require('../../src/api/dummyApi');

describe('getCommentsApi', () => {
    jest.spyOn(api, 'getCommentsApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getComments should return resolved', (done) => {
        api.getCommentsApi.mockResolvedValue({
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
        repository.getComments()
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

    test('getCommentsApi should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getCommentsApi.mockRejectedValue(errorText);
        repository.getComments().catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
});
