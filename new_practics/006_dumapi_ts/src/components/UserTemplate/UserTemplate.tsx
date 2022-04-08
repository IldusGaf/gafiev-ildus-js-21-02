import React, { useContext } from 'react';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';
import './UserTemplate.css';
import { ThemeContext } from '../../contexts/ThemeContext';

const UserTemplate = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`user-template ${themeContext.darkTheme && 'user-template_dark'}`}>
      <div className="user-template__img">
        <Skeleton.Avatar active shape="square" size={100} />
      </div>
      <Skeleton.Input active size="small" />
    </div>
  );
};

export default UserTemplate;
