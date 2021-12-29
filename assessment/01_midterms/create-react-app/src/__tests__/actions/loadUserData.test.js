import { getUserDataApi, getPostListByUserApi, updateUserApi } from "../../api/dummyProxy";
import { loadUserData, loadUserPostList, updateUserData, openEditor, closeEditor } from "../../actions/loadUserData";

jest.mock("../../api/dummyProxy");

describe('loadUserData actions', () => {
    test('loadUserData should call showUserLoadingAction', () => {
        getUserDataApi.mockResolvedValue('result');
        const dispatch = jest.fn();
        loadUserData('123')(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'USER/SHOW_LOADING' });
    });

    test('loadUserData should call loadingUserDataAction', (done) => {
        const apiResult = 'result';
        getUserDataApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'USER/LOADING_USER_DATA',
                    userData: apiResult
                });
                done();
            });
            loadUserData('123')(dispatch);
    });

    test('loadUserData should call hideUserLoadingAction', (done) => {
        const apiResult = 'result';
        getUserDataApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'USER/HIDE_LOADING'
                });
                done();
            });
            loadUserData('123')(dispatch);
    });

    test('loadPostListByUser should call showPostsLoadingAction', () => {
        getPostListByUserApi.mockResolvedValue('result');
        const dispatch = jest.fn();
        loadUserPostList('123', 0, 6)(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'USER/SHOW_POSTS_LOADING' });
    });

    test('loadPostListByUser should call loadingUserPostList', (done) => {
        const apiResult = 'result';
        getPostListByUserApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'USER/LOADING_USER_POST_LIST',
                    postList: apiResult
                });
                done();
            });
            loadUserPostList('123', 0, 6)(dispatch);
    });

    test('loadPostListByUser should call hidePostsLoadingAction', (done) => {
        const apiResult = 'result';
        getPostListByUserApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'USER/HIDE_POSTS_LOADING'
                });
                done();
            });
            loadUserPostList('123', 0, 6)(dispatch);
    });

    test('openEditor should call openEditorAction', () => {
        const dispatch = jest.fn();
        openEditor()(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'EDIT_PROFILE/OPEN_EDITOR' });
    });

    test('closeEditor should call closeEditorAction', () => {
        const dispatch = jest.fn();
        closeEditor()(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'EDIT_PROFILE/CLOSE_EDITOR' });
    });

    test('updateUserData should call updateUserDataAction', (done) => {
        const data = { name: 'Moisha' }
        const apiResult = {...data, id: '123'}
        updateUserApi.mockResolvedValue(apiResult);
        const dispatch = jest.fn().mockImplementation((action) => {
            expect(action).toEqual({
                type: 'EDIT_PROFILE/UPDATE_USER_DATA',
                userData: apiResult
            });
            done();
        });
        updateUserData('123', data)(dispatch);
    });
});
