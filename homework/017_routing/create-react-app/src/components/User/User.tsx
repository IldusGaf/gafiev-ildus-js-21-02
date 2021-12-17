import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';
import { ThemeContext, ThemeContextState } from '../../contexts/ThemeContext';

interface Props {
  userId?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  className?: string;
}

const User = ({
  userId, title, firstName, lastName, picture, className,
}:Props) => (
  <ThemeContext.Consumer>
    {
            (context: Partial<ThemeContextState>) => (
              <div className={`user ${className}`}>
                <span className={`user__user-name ${context.darkTheme && ' user_name_dark'}`}>
                  {`${title} 
          ${firstName} 
          ${lastName}`}
                </span>
                <Link to={`/user/${userId}`}>Перейти к профилю</Link>
                <figure className="user__photo">
                  <img src={picture} alt="Load Error" />
                </figure>
              </div>
            )
        }
  </ThemeContext.Consumer>
);
export default User;

User.defaultProps = {
  userId: 0,
  title: ' ',
  firstName: ' ',
  lastName: ' ',
  className: ' ',
  picture: ' ',
};
