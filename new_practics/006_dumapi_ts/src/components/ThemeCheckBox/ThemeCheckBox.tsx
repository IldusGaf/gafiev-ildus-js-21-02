import React, { ChangeEvent, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeCheckBox = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="theme-checkbox">
      <input
        type="checkbox"
        className="theme-checkbox__input"
        checked={themeContext.darkTheme}
        onChange={
            (event: ChangeEvent<HTMLInputElement>) => {
              themeContext.toggleTheme && themeContext.toggleTheme(event.target.checked);
            }
}
      />
      <span>Темная тема</span>
    </div>
  );
};

export default ThemeCheckBox;
