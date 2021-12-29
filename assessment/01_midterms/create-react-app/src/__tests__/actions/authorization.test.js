import { authorizeUser, cancelUser } from "../../actions/authorization";
import { getUserDataApi } from "../../api/dummyProxy";

jest.mock("../../api/dummyProxy");

describe('authorization', () => {
    test('authorizeUser should call authUserAction', (done) => {
        const id = '123'; 
        const user = { id: id, name: 'Masyanya' };
        getUserDataApi.mockResolvedValue(user);
        const dispatch = jest.fn().mockImplementation((action) => {
            expect(action).toEqual({
                type: 'AUTH_FORM/AUTHORIZE_USER',
                user: user
            });
            done();
        });
        authorizeUser(id, 'error')(dispatch);
    });

    test('should call cancelUser', () => {
        const dispatch = jest.fn();
        cancelUser()(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'AUTH_MENU/CANCEL_USER' });
    });
});
