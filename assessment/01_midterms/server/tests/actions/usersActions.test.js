const actions = require('../../src/actions/usersActions');
const api = require('../../src/api/dummyApi');

describe('addUser', () => {
    jest.spyOn(api, 'addUserApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('addUser should return resolved', (done) => {
        api.addUserApi.mockResolvedValue({
            id: 123,
            firstName: 'Dasafs',
            lastName: 'Bradley',
            dateOfBirth: '1984-11-25T21:43:06.020Z',
            registerDate: '1984-11-25T21:43:06.020Z',
            updatedDate: '1984-11-25T21:43:06.020Z'
        });
        actions.addUser( {
            firstName: 'Dasafs',
            lastName: 'Bradley',
            dateOfBirth: '26.11.1984',
        })
            .then(result => {
                expect(result).toEqual({
                    id: 123,
                    firstName: 'Dasafs',
                    lastName: 'Bradley',
                    dateOfBirth: '26.11.1984',
                    registerDate: '26.11.1984',
                    updatedDate: '26.11.1984'
                });
                done();
            });
    });

    test('addUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.addUserApi.mockRejectedValue(errorText);
        actions.addUser( {
            firstName: 'Dasafs',
            lastName: 'Bradley',
            dateOfBirth: '26.11.1984',
        }).catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
})

describe('updateUser', () => {
    jest.spyOn(api, 'updateUserApi');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('updateUser should return resolved', (done) => {
        api.updateUserApi.mockResolvedValue({
            id: 123,
            firstName: 'Dasafs',
            lastName: 'Bradley',
            dateOfBirth: '1984-11-25T21:56:06.020Z',
            registerDate: '1984-11-25T21:56:06.020Z',
            updatedDate: '1984-11-25T21:56:06.020Z'
        });
        actions.updateUser(123, {
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '26.11.1984',
        })
            .then(result => {
                expect(result).toEqual({
                    id: 123,
                    firstName: 'Allen',
                    lastName: 'Bradley',
                    dateOfBirth: '26.11.1984',
                    registerDate: '26.11.1984',
                    updatedDate: '26.11.1984'
                });
                done();
            });
    });

    test('updateUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.updateUserApi.mockRejectedValue(errorText);
        actions.updateUser(123, {
            id: 123,
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '26.11.1984',
        }).catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
})