import React, { useContext } from 'react';
import './User.css';
import { UserType } from '../../types/dummyAPIResponses';
import { ThemeContext } from '../../contexts/ThemeContext';

const User = ({
  id, title, firstName, lastName, picture,
}:UserType) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`user ${themeContext.darkTheme && 'user_dark'}`}>
      <img className="user__img" src={picture} alt="user_picture" />
      <div className="user__caption">
        {title} {firstName} {lastName} {id}
      </div>
    </div>

  );
};

export default User;
