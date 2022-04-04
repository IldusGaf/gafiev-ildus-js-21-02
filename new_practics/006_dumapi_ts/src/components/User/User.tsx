import React from 'react';
import './User.css';

interface Props {
  caption: string
}
const User = ({ caption }:Props) => (
  <div className="user">
    <div className="user__img" />
    <div className="user__caption">
      {caption}
    </div>
  </div>
);

export default User;
