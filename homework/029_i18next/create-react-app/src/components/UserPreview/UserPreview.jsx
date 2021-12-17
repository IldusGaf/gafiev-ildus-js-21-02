import React from 'react';
import './UserPreview.css';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper/ComponentWithHelper';

const UserPreview = (props) => {
  return (
    <div className={`user__container ${props.darkTheme && 'user_dark'}`}>
      <figure className="user__picture">
        <img src={props.picture} alt="Load Error" />
      </figure>
      <ComponentWithHelper text={props.id}>
        <div className="user__name">
          {props.title ? `${props.title} ${props.firstName} ${props.lastName}` : `${props.firstName} ${props.lastName}`}
        </div>
      </ComponentWithHelper>
    </div>
  );
};

export default UserPreview;
