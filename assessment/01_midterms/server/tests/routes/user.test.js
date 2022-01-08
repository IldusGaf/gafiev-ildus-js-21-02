const request = require('supertest');
const app = require('../../src/app');
const api = require('../../src/api/dummyApi');

jest.mock('../../src/api/dummyApi');

describe('getUserList', () => {
    test('getUserList should return user list', async () => {
        api.getUserListApi.mockResolvedValue({
            data: [
                {
                    id: 123,
                    firstName: 'Allen',
                    lastName: 'Bradley',
                },
                {
                    id: 456,
                    firstName: 'Harley',
                    lastName: 'Davidson'
                }
            ]
        });
        const result = await request(app)
            .get('/user')
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            data: [
                {
                    id: 123,
                    firstName: 'Allen',
                    lastName: 'Bradley',
                },
                {
                    id: 456,
                    firstName: 'Harley',
                    lastName: 'Davidson'
                }
            ]
        });
    });

    test('getUserList should return error', async () => {
        const errorText = 'Some error';
        api.getUserListApi.mockRejectedValue(errorText);
        const result = await request(app)
            .get('/user')
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});

describe('getUser', () => {
    test('getUser should return user data', async () => {
        const id = 123;
        api.getUserApi.mockResolvedValue({
            id: 123,
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '1984-11-25T21:56:06.020Z',
            registerDate: '1984-11-25T21:56:06.020Z',
            updatedDate: '1984-11-25T21:56:06.020Z'
        });
        const result = await request(app)
            .get(`/user/${id}`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            id: 123,
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '26.11.1984',
            registerDate: '26.11.1984',
            updatedDate: '26.11.1984'
        });
    });

    test('getUser should return error', async () => {
        const id = 123;
        const errorText = 'Some error';
        api.getUserApi.mockRejectedValue(errorText);
        const result = await request(app)
            .get(`/user/${id}`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});

describe('addUser', () => {
    test('addUser should return user data of created user', async () => {
        api.addUserApi.mockResolvedValue({
            id: 123,
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '1984-11-25T21:56:06.020Z',
            registerDate: '1984-11-25T21:56:06.020Z',
            updatedDate: '1984-11-25T21:56:06.020Z'
        });
        const result = await request(app)
            .post('/user/create')
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            id: 123,
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '26.11.1984',
            registerDate: '26.11.1984',
            updatedDate: '26.11.1984'
        });
    });

    test('addUser should return error', async () => {
        const errorText = 'Some error';
        api.addUserApi.mockRejectedValue(errorText);
        const result = await request(app)
            .post('/user/create')
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});

describe('updateUser', () => {
    test('updateUser should return updated user data', async () => {
        const id = 123;
        api.updateUserApi.mockResolvedValue({
            id: 123,
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '1984-11-25T21:56:06.020Z',
            registerDate: '1984-11-25T21:56:06.020Z',
            updatedDate: '1984-11-25T21:56:06.020Z'
        });
        const result = await request(app)
            .put(`/user/${id}`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            id: 123,
            firstName: 'Allen',
            lastName: 'Bradley',
            dateOfBirth: '26.11.1984',
            registerDate: '26.11.1984',
            updatedDate: '26.11.1984'
        });
    });

    test('updateUser should return error', async () => {
        const id = 123;
        const errorText = 'Some error';
        api.updateUserApi.mockRejectedValue(errorText);
        const result = await request(app)
            .put(`/user/${id}`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});
