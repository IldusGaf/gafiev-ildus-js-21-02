import changeThemeReducer from "../../reducers/changeThemeReducer";

const initialState = {
    darkTheme: false,
}

describe('change theme reducer', () => {
    test('change theme', () => {
        expect(changeThemeReducer(initialState, {type: 'THEME_CHANGER/CHANGE_THEME'})).toEqual({
            darkTheme: !initialState.darkTheme
        });
    });

    test('unknown action', () => {
        expect(changeThemeReducer(initialState, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
    });
});
