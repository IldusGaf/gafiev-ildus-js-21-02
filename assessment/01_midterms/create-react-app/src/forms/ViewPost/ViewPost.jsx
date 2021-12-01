import React, { useState, useEffect } from 'react';
import './ViewPost.css';
import { Avatar } from 'antd';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper/ComponentWithHelper';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { Pagination } from 'antd';
import Comment from '../../components/Comment/Comment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/loadComments';

const ViewPost = ({
  darkTheme,
  id,
  avatar,
  ownerId,
  title,
  firstName,
  lastName,
  publishDate,
  picture,
  text,
  comments,
  total,
  commentsLoading,
  loadComments,
}) => {
  const [current, setCurrent] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    loadComments(id, 0, 5);
  }, []);

  const changePage = (page, limit) => {
    setCurrent(page);
    setPageSize(limit);
    loadComments(id, page - 1, limit);
  };

  return (
    <div className={`open-post ${darkTheme && 'open-post_dark'}`}>
      <div className="open-post__header">
        <div className="open-post__owner">
          <Avatar shape="circle" src={avatar} />
          <ComponentWithHelper text={ownerId}>
            <div className="comment__owner">
              <Link to={`/users/${ownerId}`}>
                {title ? `${title} ${firstName} ${lastName}` : `${firstName} ${lastName}`}
              </Link>
            </div>
          </ComponentWithHelper>
        </div>
        <div className="open-post__date">{publishDate}</div>
      </div>
      <figure>
        <img src={picture} alt="Load error" />
      </figure>
      <div className="open-post__text">{text}</div>
      <div className="open-post__comments">
        {commentsLoading ? (
          <div className="loader__container">
            <Loader />
          </div>
        ) : (
          <div>
            <div className="comments__container">
              {comments.map((item, index) => (
                <Comment
                  key={index}
                  id={item.owner.id}
                  avatar={item.owner.picture}
                  title={item.owner.title}
                  firstName={item.owner.firstName}
                  lastName={item.owner.lastName}
                  publishDate={item.publishDate}
                  text={item.message}
                  darkTheme={darkTheme}
                />
              ))}
            </div>
            <div className="posts__footer">
              <Pagination size="small" current={current} pageSize={pageSize} total={total} onChange={changePage} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    darkTheme: state.theme.darkTheme,
    comments: state.comments.comments,
    total: state.comments.total,
    commentsLoading: state.comments.loading,
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(ViewPost);
