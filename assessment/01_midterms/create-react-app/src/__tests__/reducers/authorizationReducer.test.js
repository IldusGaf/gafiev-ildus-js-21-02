import authorizationReducer from "../../reducers/authorizationReducer";

const initialState = {
    authUser: {},
    authorized: false,
};

describe('authorization reducer', () => {
    test('log in', () => {
        const user = { name: 'Masyanya' };
        expect(authorizationReducer(initialState, {type: 'AUTH_FORM/AUTHORIZE_USER', user})).toEqual({
            authUser: user,
            authorized: true
        });
    });

    test('log out', () => {
        expect(authorizationReducer(initialState, {type: 'AUTH_MENU/CANCEL_USER'})).toEqual({
            ...initialState,
            authorized: false
        });
    });

    test('unknown action', () => {
        expect(authorizationReducer(initialState, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
    });
});
