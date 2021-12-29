import { changeTheme } from "../../actions/changeTheme";

describe('changeTheme', () => {
    test('should call changeThemeAction', () => {
        const dispatch = jest.fn();
        changeTheme()(dispatch);
        expect(dispatch).toBeCalledWith({
            type: 'THEME_CHANGER/CHANGE_THEME'
        });
    });
});
