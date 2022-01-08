import postListReducer from "../../reducers/postListReducer";

const initialState = {
    postList: [],
    total: 0,
    loading: false,
    post: {},
    isOpen: false,
}

describe('postListReducer', () => {
    test('show loading', () => {
        expect(postListReducer(initialState, {type: 'POST_LIST/SHOW_LOADING'})).toEqual({
            ...initialState,
            loading: true
        });
    });

    test('hide loading', () => {
        expect(postListReducer(initialState, {type: 'POST_LIST/HIDE_LOADING'})).toEqual({
            ...initialState,
            loading: false
        });
    });

    test('loading post list', () => {
        const postList = {
            data: [
                { text: 'text1' },
                { text: 'text2' },
                { text: 'text3' }
            ],
            total: 3
        }
        expect(postListReducer(initialState, {type: 'POST_LIST/LOADING_POST_LIST_SUCCESS', postList})).toEqual({
            ...initialState,
            postList: postList.data,
            total: postList.total
        });
    });

    test('open post', () => {
        const post = { text: 'text' };
        expect(postListReducer(initialState, {type: 'POST_PREVIEW/OPEN_POST', post})).toEqual({
            ...initialState,
            post: post,
            isOpen: true
        });
    });

    test('close post', () => {
        expect(postListReducer(initialState, {type: 'POST_PREVIEW/CLOSE_POST'})).toEqual({
            ...initialState,
            isOpen: false
        });
    });

    test('unknown action', () => {
        expect(postListReducer(initialState, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
    });
});
