import React, { useEffect, useState } from 'react';
import './AuthForm.css';
import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/authorization';
import { useTranslation } from 'react-i18next';
import '../../locale/i18next';

const AuthForm = ({ darkTheme, redirectId, authorized, authorizeUser }) => {
  const [id, setId] = useState('');
  const { t } = useTranslation();
  const handleButtonClick = () => {
    authorizeUser(id);
  };

  useEffect(() => {
    setId('');
  }, []);

  return (
    <div className="auth-form__page">
      <div className={`auth-form ${darkTheme && 'auth-form_dark'}`}>
        <div className="auth-form__container">
          <h2>{t('authForm.login')}</h2>
          <div className="auth-form__label">ID:</div>
          <div>
            <input
              className="auth-form__input"
              type="text"
              placeholder={t('authForm.placeholder')}
              onChange={(event) => setId(event.target.value)}
            />
          </div>
          <div>
            <button className="auth-form__button" onClick={handleButtonClick}>
              {t('authForm.signIn')}
            </button>
          </div>
          <div className="auth-form__reg">
            {t('authForm.isAccount')} <Link to={'/reg'}>{t('authForm.create')}</Link>
          </div>
        </div>
      </div>
      {authorized && <Navigate to={`/users/${redirectId}`} />}
    </div>
  );
};

export default connect(
  (state) => ({
    redirectId: state.auth.authUser.id,
    authorized: state.auth.authorized,
    darkTheme: state.theme.darkTheme,
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(AuthForm);
