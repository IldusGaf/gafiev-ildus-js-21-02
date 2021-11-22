import React from 'react';
import './Header.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ThemeCheckbox } from '../ThemeCheckbox/ThemeCheckbox';
import { ThemeContext, ThemeContextState } from '../../contexts/ThemeContext';

interface Props {
  name?: string;
  onClick: any;
}

export const Header = (props: Props) => (
  <ThemeContext.Consumer>
    {
                (context: Partial<ThemeContextState>) => (
                  <div className={`header ${context.darkTheme && 'header_dark'}`}>
                    <h1>{props.name}</h1>
                    <Menu mode="horizontal" onClick={props.onClick}>
                      <Menu.Item key="users"><Link to="/">Пользователи</Link></Menu.Item>
                      <Menu.Item key="reg"><Link to="/create">Регистрация</Link></Menu.Item>
                    </Menu>
                    <ThemeCheckbox />
                  </div>
                )
  }
  </ThemeContext.Consumer>
);
