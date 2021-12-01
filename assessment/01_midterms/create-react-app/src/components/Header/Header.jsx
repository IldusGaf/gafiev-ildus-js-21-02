import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import AuthorizationMenu from '../AuthorizationMenu/AuthorizationMenu';

const Header = (props) => {
  return (
    <div className="header">
      <Logo darkTheme={props.darkTheme} />
      <HeaderMenu darkTheme={props.darkTheme} />
      <AuthorizationMenu />
    </div>
  );
};

export default Header;
