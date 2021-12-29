import { getCommentsApi } from "../../api/dummyProxy";
import { loadComments } from "../../actions/loadComments";

jest.mock("../../api/dummyProxy");

describe('loadComments actions', () => {
    test('loadComments should call showLoadingAction', () => {
        getCommentsApi.mockResolvedValue('result');
        const dispatch = jest.fn();
        loadComments(0, 6)(dispatch);
        expect(dispatch).toBeCalledWith({ type: 'OPEN_POST/SHOW_LOADING' });
    });

    test('loadComments should call loadingCommentsAction', (done) => {
        const apiResult = 'result';
        getCommentsApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'OPEN_POST/LOADING_COMMENTS',
                    comments: apiResult
                });
                done();
            });
            loadComments(0, 6)(dispatch);
    });

    test('loadComments should call hideLoadingAction', (done) => {
        const apiResult = 'result';
        getCommentsApi.mockResolvedValue(apiResult);
        const dispatch = jest
            .fn()
            .mockImplementationOnce(() => {})
            .mockImplementationOnce(() => {})
            .mockImplementationOnce((action) => {
                expect(action).toEqual({
                    type: 'OPEN_POST/HIDE_LOADING'
                });
                done();
            });
            loadComments(0, 6)(dispatch);
    });
});
