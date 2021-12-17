import React from 'react';
import './Comment.css';
import { Avatar } from 'antd';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper/ComponentWithHelper';
import { Link } from 'react-router-dom';

const Comment = (props) => {
  return (
    <div className={`comment ${props.darkTheme && 'comment_dark'}`}>
      <Avatar shape="circle" src={props.avatar} />
      <div className="comment__container">
        <div className="comment__header">
          <ComponentWithHelper text={props.id}>
            <div className="comment__owner">
              <Link to={`/users/${props.id}`}>
                {props.title
                  ? `${props.title} ${props.firstName} ${props.lastName}`
                  : `${props.firstName} ${props.lastName}`}
              </Link>
            </div>
          </ComponentWithHelper>
          <div className="comment__date">{props.publishDate && props.publishDate.slice(0, 10)}</div>
        </div>
        <div className="comment__text">{props.text}</div>
      </div>
    </div>
  );
};

export default Comment;
