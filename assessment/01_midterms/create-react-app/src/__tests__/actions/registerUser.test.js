import { addUserApi } from "../../api/dummyProxy";
import { addNewUser, preventRedirect } from "../../actions/registerUser";

jest.mock("../../api/dummyProxy");

describe('registerUser actions', () => {
    test('addNewUser should call addUserAction', (done) => {
        const id = '123'; 
        const user = { id: id, name: 'Masyanya' };
        addUserApi.mockResolvedValue(user);
        const dispatch = jest.fn().mockImplementation((action) => {
            expect(action).toEqual({
                type: 'REG_FORM/ADD_USER',
                userId: id
            });
            done();
        });
        addNewUser(user)(dispatch);
    });

    test('preventRedirect should call preventRedirectAction', () => {
        const dispatch = jest.fn();
        preventRedirect()(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'REG_FORM/PREVENT_REDIRECT' });
    });
});
