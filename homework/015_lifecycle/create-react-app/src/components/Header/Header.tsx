import React from 'react';
import './Header.css';
import { ThemeCheckbox } from '../ThemeCheckbox/ThemeCheckbox';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';

export class Header extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {
                (context: Partial<ThemeContextState>) => (
                  <div className={`header ${context.darkTheme && 'header_dark'}`}>
                    <h1 className="header__text">
                      Пользователи
                    </h1>
                    <ThemeCheckbox />
                  </div>
                )
  }
      </ThemeContextConsumer>
    );
  }
}
