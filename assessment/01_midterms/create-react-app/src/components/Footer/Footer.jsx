import React from 'react';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import '../../locale/i18next';
import LanguageChanger from '../LanguageChanger/LanguageChanger';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <span className="footer__copyright">{t('logoDescription')} &#169; 2021</span>
      <ThemeChanger />
      <LanguageChanger />
    </div>
  );
};

export default Footer;
