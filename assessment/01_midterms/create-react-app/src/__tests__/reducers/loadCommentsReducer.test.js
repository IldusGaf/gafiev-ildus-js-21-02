import loadCommentsReducer from "../../reducers/loadCommentsReducer";

const initialState = {
    comments: [],
    total: 0,
    loading: false,
}

describe('comments reducer', () => {
    test('show loading', () => {
        expect(loadCommentsReducer(initialState, {type: 'OPEN_POST/SHOW_LOADING'})).toEqual({
            ...initialState,
            loading: true
        });
    });

    test('hide loading', () => {
        expect(loadCommentsReducer(initialState, {type: 'OPEN_POST/HIDE_LOADING'})).toEqual({
            ...initialState,
            loading: false
        });
    });

    test('loading comments', () => {
        const comments = {
            data: [
                { text: 'text1' },
                { text: 'text2' },
                { text: 'text3' }
            ],
            total: 3
        }
        expect(loadCommentsReducer(initialState, {type: 'OPEN_POST/LOADING_COMMENTS', comments})).toEqual({
            ...initialState,
            comments: comments.data,
            total: comments.total,
        });
    });

    test('unknown action', () => {
        expect(loadCommentsReducer(initialState, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
    });
});
