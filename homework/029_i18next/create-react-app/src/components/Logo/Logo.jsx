import React from 'react';
import './Logo.css';
import { RobotOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import '../../locale/i18next';

const Logo = (props) => {
  const { t } = useTranslation();
  return (
    <div className="logo__container">
      <RobotOutlined style={{ fontSize: '25px' }} />
      <h1 className={props.darkTheme && 'h1_dark'}>{t('logoDescription')}</h1>
    </div>
  );
};

export default Logo;
