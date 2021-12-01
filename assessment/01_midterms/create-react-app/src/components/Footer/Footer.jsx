import React from 'react';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__copyright">Delta world &#169; 2021</span>
      <ThemeChanger />
    </div>
  );
};

export default Footer;
