import userListReducer from "../../reducers/userListReducer";

const initialState = {
    userList: [],
    total: 0,
    loading: false,
}

describe('user list reducer', () => {
    test('show loading', () => {
        expect(userListReducer(initialState, {type: 'USER_LIST/SHOW_LOADING'})).toEqual({
            ...initialState,
            loading: true
        });
    });

    test('hide loading', () => {
        expect(userListReducer(initialState, {type: 'USER_LIST/HIDE_LOADING'})).toEqual({
            ...initialState,
            loading: false
        });
    });

    test('loading user list', () => {
        const userList = {
            data: [
                { name: 'Masyanya' },
                { name: 'Tanya' },
                { name: 'Olga' }
            ],
            total: 3
        }
        expect(userListReducer(initialState, {type: 'USER_LIST/LOADING_USER_LIST_SUCCESS', userList})).toEqual({
            ...initialState,
            userList: userList.data,
            total: userList.total
        });
    });

    test('unknown action', () => {
        expect(userListReducer(initialState, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
    });
});
