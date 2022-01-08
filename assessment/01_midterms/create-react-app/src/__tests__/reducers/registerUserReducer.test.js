import registerUserReducer from "../../reducers/registerUserReducer";

const initialState = {
    newUserId: '',
    redirect: false,
}

describe('register user', () => {
    test('set new user id', () => {
        const userId = '123';
        expect(registerUserReducer(initialState, {type: 'REG_FORM/ADD_USER', userId})).toEqual({
            newUserId: userId,
            redirect: true
        });
    });

    test('redirect prevention', () => {
        expect(registerUserReducer(initialState, {type: 'REG_FORM/PREVENT_REDIRECT'})).toEqual({
            ...initialState,
            redirect: false
        });
    });

    test('unknown action', () => {
        expect(registerUserReducer(initialState, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
    });
});
