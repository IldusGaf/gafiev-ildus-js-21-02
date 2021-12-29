import userDataReducer from "../../reducers/userDataReducer";

const initialState = {
    user: {},
    userLoading: false,
    postList: [],
    total: 0,
    postsLoading: false,
    editorOpened: false,
}

describe('user data reducer', () => {
    test('show user data loading', () => {
        expect(userDataReducer(initialState, {type: 'USER/SHOW_LOADING'})).toEqual({
            ...initialState,
            userLoading: true
        });
    });

    test('hide user data loading', () => {
        expect(userDataReducer(initialState, {type: 'USER/HIDE_LOADING'})).toEqual({
            ...initialState,
            userLoading: false
        });
    });

    test('loading user data', () => {
        const userData = {
            id: '123',
            name: 'Masyanya'
        }
        expect(userDataReducer(initialState, {type: 'USER/LOADING_USER_DATA', userData})).toEqual({
            ...initialState,
            user: userData
        });
    });

    test('show user posts loading', () => {
        expect(userDataReducer(initialState, {type: 'USER/SHOW_POSTS_LOADING'})).toEqual({
            ...initialState,
            postsLoading: true
        });
    });

    test('hide user posts loading', () => {
        expect(userDataReducer(initialState, {type: 'USER/HIDE_POSTS_LOADING'})).toEqual({
            ...initialState,
            postsLoading: false
        });
    });

    test('loading user postsa', () => {
        const postList = {
            data: [
                { text: 'text1' },
                { text: 'text2' },
                { text: 'text3' }
            ],
            total: 3
        }
        expect(userDataReducer(initialState, {type: 'USER/LOADING_USER_POST_LIST', postList})).toEqual({
            ...initialState,
            postList: postList.data,
            total: postList.total
        });
    });

    test('update user data', () => {
        const userData = {
            name: 'Masyanya'
        }
        expect(userDataReducer(initialState, {type: 'EDIT_PROFILE/UPDATE_USER_DATA', userData})).toEqual({
            ...initialState,
            user: userData
        });
    });

    test('open editor', () => {
        expect(userDataReducer(initialState, {type: 'EDIT_PROFILE/OPEN_EDITOR'})).toEqual({
            ...initialState,
            editorOpened: true
        });
    });

    test('close editor', () => {
        expect(userDataReducer(initialState, {type: 'EDIT_PROFILE/CLOSE_EDITOR'})).toEqual({
            ...initialState,
            editorOpened: false
        });
    });

    test('unknown action', () => {
        expect(userDataReducer(initialState, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
    });
});
