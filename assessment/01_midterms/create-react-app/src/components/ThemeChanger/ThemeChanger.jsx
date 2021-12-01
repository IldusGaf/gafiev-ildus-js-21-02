import { Switch } from 'antd';
import React from 'react';
import './ThemeChanger.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/changeTheme';

const ThemeChanger = ({ changeTheme }) => {
  const handleThemeChange = () => {
    changeTheme();
  };

  return (
    <div className="theme-changer">
      <div className="theme-changer__text">Темная тема</div>
      <Switch onChange={handleThemeChange} />
    </div>
  );
};

export default connect(
  () => {},
  (dispatch) => bindActionCreators(actions, dispatch)
)(ThemeChanger);
