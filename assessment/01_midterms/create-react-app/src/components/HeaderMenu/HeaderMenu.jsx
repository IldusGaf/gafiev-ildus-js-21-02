import React from 'react';
import './HeaderMenu.css';
import { Menu } from 'antd';
import { UserOutlined, PictureOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../locale/i18next';

const HeaderMenu = (props) => {
  const { t } = useTranslation();
  return (
    <div className="menu">
      <Menu style={{ fontSize: '16px' }} mode="horizontal" theme={props.darkTheme && 'dark'}>
        <Menu.Item key="users" icon={<UserOutlined />}>
          <Link to="/users">{t('headerMenu.users')}</Link>
        </Menu.Item>
        <Menu.Item key="posts" icon={<PictureOutlined />}>
          <Link to="/">{t('headerMenu.posts')}</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderMenu;
