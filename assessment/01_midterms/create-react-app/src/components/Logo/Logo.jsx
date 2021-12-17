import React from 'react';
import './Logo.css';
import { RobotOutlined } from '@ant-design/icons';

const Logo = (props) => {
  return (
    <div className="logo__container">
      <RobotOutlined style={{ fontSize: '25px' }} />
      <h1 className={props.darkTheme && 'h1_dark'}>Delta world</h1>
    </div>
  );
};

export default Logo;
