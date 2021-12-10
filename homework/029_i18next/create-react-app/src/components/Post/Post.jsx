import React from 'react';
import './Post.css';
import { Avatar } from 'antd';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper/ComponentWithHelper';
import { Link } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className={`post__container ${props.darkTheme && 'post_dark'}`}>
      <Avatar className={`post__avatar ${props.hidden && 'hidden'}`} shape="circle" src={props.avatar} />
      <ComponentWithHelper text={props.id}>
        <div className={`post__name ${props.hidden && 'hidden'}`}>
          <Link to={`/users/${props.id}`}>
            {props.title
              ? `${props.title} ${props.firstName} ${props.lastName}`
              : `${props.firstName} ${props.lastName}`}
          </Link>
        </div>
      </ComponentWithHelper>
      <div className={`post__date ${props.hidden && 'hidden'}`}>{props.date.slice(0, 10)}</div>
      <figure className="post__picture">
        <img src={props.picture} alt="Load error" />
      </figure>
      <div className="post__text-preview">{props.text}</div>
    </div>
  );
};

export default Post;
