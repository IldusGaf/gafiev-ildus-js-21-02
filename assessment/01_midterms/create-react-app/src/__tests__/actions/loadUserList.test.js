import { getUserListApi } from "../../api/dummyProxy";
import { loadUserList } from "../../actions/loadUserList";

jest.mock("../../api/dummyProxy");

describe('UserList', () => {
    test('loadUserData should call showUserLoadingAction', () => {
        getUserListApi.mockResolvedValue('result');
        const dispatch = jest.fn();
        loadUserList(0, 6)(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'USER_LIST/SHOW_LOADING' });
    });

    test('loadUserData should call loadingUserDataAction', (done) => {
        const apiResult = 'result';
        getUserListApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'USER_LIST/LOADING_USER_LIST_SUCCESS',
                    userList: apiResult
                });
                done();
            });
            loadUserList(0, 6)(dispatch);
    });

    test('loadUserData should call hideUserLoadingAction', (done) => {
        const apiResult = 'result';
        getUserListApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'USER_LIST/HIDE_LOADING'
                });
                done();
            });
            loadUserList(0, 6)(dispatch);
    });
});
