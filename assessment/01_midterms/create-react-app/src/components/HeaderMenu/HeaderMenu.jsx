import React from 'react';
import './HeaderMenu.css';
import { Menu } from 'antd';
import { UserOutlined, PictureOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const HeaderMenu = (props) => {
  return (
    <div className="menu">
      <Menu style={{ fontSize: '16px' }} mode="horizontal" theme={props.darkTheme && 'dark'}>
        <Menu.Item key="users" icon={<UserOutlined />}>
          <Link to="/users">Пользователи</Link>
        </Menu.Item>
        <Menu.Item key="posts" icon={<PictureOutlined />}>
          <Link to="/">Посты</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderMenu;
