import React from 'react';
import './Header.css';
import { ThemeCheckbox } from '../ThemeCheckbox/ThemeCheckbox';
import { ThemeContext, ThemeContextState } from '../../contexts/ThemeContext';

export const Header = () => (
  <ThemeContext.Consumer>
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
  </ThemeContext.Consumer>
);
