import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import './PostList.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/loadPostList';
import Post from '../../components/Post/Post';
import ComponentForModal from '../../wrappers/ComponentForModal/ComponentForModal';
import ViewPost from '../ViewPost/ViewPost';

const PostList = ({ darkTheme, posts, total, loading, post, isOpen, loadPostList, openPost, closePost }) => {
  const [current, setCurrent] = useState(0);
  const [pageSize, setPageSize] = useState(6);

  useEffect(() => {
    loadPostList(0, 6);
  }, []);

  const changePage = (page, limit) => {
    setCurrent(page);
    setPageSize(limit);
    loadPostList(page - 1, limit);
  };

  const openModal = (post) => {
    openPost(post);
  };

  const closeModal = () => {
    closePost();
  };

  return loading ? (
    <div className="loader__container">
      <Loader />
    </div>
  ) : (
    <div className="posts__page">
      <div className="posts__container">
        {posts.map((item, index) => (
          <div onClick={() => openModal(item)} key={index}>
            <Post
              key={index}
              id={item.owner.id}
              avatar={item.owner.picture}
              title={item.owner.title}
              firstName={item.owner.firstName}
              lastName={item.owner.lastName}
              date={item.publishDate}
              picture={item.image}
              text={item.text}
              darkTheme={darkTheme}
            />
          </div>
        ))}
      </div>
      <div className="posts__footer">
        <Pagination
          size="small"
          current={current}
          pageSize={pageSize}
          total={total}
          onChange={changePage}
          pageSizeOptions={[6, 12, 24, 48, 96]}
        />
      </div>
      <ComponentForModal isOpen={isOpen} closeModal={closeModal}>
        {isOpen && (
          <ViewPost
            id={post.id}
            avatar={post.owner.picture}
            ownerId={post.owner.id}
            title={post.owner.title}
            firstName={post.owner.firstName}
            lastName={post.owner.lastName}
            publishDate={post.publishDate.slice(0, 10)}
            picture={post.image}
            text={post.text}
          />
        )}
      </ComponentForModal>
    </div>
  );
};

export default connect(
  (state) => ({
    posts: state.posts.postList,
    total: state.posts.total,
    loading: state.posts.loading,
    darkTheme: state.theme.darkTheme,
    post: state.posts.post,
    isOpen: state.posts.isOpen,
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(PostList);
