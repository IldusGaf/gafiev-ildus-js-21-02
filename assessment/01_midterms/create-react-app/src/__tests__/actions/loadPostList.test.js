import { getPostListApi } from "../../api/dummyProxy";
import { loadPostList, openPost, closePost } from '../../actions/loadPostList';

jest.mock("../../api/dummyProxy");

describe('PostList actions', () => {
    test('loadPostList should call showLoadingAction', () => {
        getPostListApi.mockResolvedValue('result');
        const dispatch = jest.fn();
        loadPostList(0, 6)(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'POST_LIST/SHOW_LOADING' });
    });

    test('loadPostList should call loadingPostListSuccessAction', (done) => {
        const apiResult = 'result';
        getPostListApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'POST_LIST/LOADING_POST_LIST_SUCCESS',
                    postList: apiResult
                });
                done();
            });
            loadPostList(0, 6)(dispatch);
    });

    test('loadPostList should call hideLoadingAction', (done) => {
        const apiResult = 'result';
        getPostListApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'POST_LIST/HIDE_LOADING'
                });
                done();
            });
            loadPostList(0, 6)(dispatch);
    });

    test('openPost should call openPostAction', () => {
        const post = {text: 'blah-blah'};
        const dispatch = jest.fn();
        openPost(post)(dispatch);
        expect(dispatch).toBeCalledWith({
            type: 'POST_PREVIEW/OPEN_POST',
            post: post
        });
    });

    test('closePost should call closePostAction', () => {
        const dispatch = jest.fn();
        closePost()(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'POST_PREVIEW/CLOSE_POST' });
    });
});
