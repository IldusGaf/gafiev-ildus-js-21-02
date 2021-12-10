import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';
import './User.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEditor, closeEditor, updateUserData, loadUserData, loadUserPostList } from '../../actions/loadUserData';
import { openPost, closePost } from '../../actions/loadPostList';
import UserCard from '../../components/UserCard/UserCard';
import Post from '../../components/Post/Post';
import ComponentForModal from '../../wrappers/ComponentForModal/ComponentForModal';
import EditUser from '../EditUser/EditUser';

const User = ({
  darkTheme,
  user,
  userDataLoading,
  posts,
  total,
  userPostsLoading,
  authUser,
  loadUserData,
  loadUserPostList,
  openPost,
  editorOpened,
  openEditor,
  closeEditor,
  updateUserData,
}) => {
  const [current, setCurrent] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const params = useParams();

  useEffect(() => {
    loadUserData(params.id);
    loadUserPostList(params.id, current, pageSize);
  }, []);

  const changePage = (page, limit) => {
    setCurrent(page);
    setPageSize(limit);
    loadUserPostList(user.id, page - 1, limit);
  };

  const openModal = (post) => {
    openPost(post);
  };

  return (
    <div className="user-form">
      {userDataLoading ? (
        <div className="loader__container">
          <Loader />
        </div>
      ) : (
        <UserCard
          picture={user.picture}
          title={user.title}
          firstName={user.firstName}
          lastName={user.lastName}
          gender={user.gender}
          dateOfBirth={user.dateOfBirth}
          registerDate={user.registerDate}
          email={user.email}
          phone={user.phone}
          id={user.id}
          authId={authUser.id}
          darkTheme={darkTheme}
          edit={openEditor}
        />
      )}
      {userPostsLoading ? (
        <div className="loader__container">
          <Loader />
        </div>
      ) : (
        <div>
          <div className="user-posts__container">
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
                  hidden
                  darkTheme={darkTheme}
                />
              </div>
            ))}
          </div>
          <div className="posts__footer">
            <Pagination size="small" current={current} pageSize={pageSize} total={total} onChange={changePage} />
          </div>
        </div>
      )}
      <ComponentForModal isOpen={editorOpened} closeModal={closeEditor}>
        {editorOpened && (
          <EditUser darkTheme={darkTheme} user={user} updateUserData={updateUserData} closeEditor={closeEditor} />
        )}
      </ComponentForModal>
    </div>
  );
};

export default connect(
  (state) => ({
    user: state.userData.user,
    userDataLoading: state.userData.userLoading,
    posts: state.userData.postList,
    total: state.userData.total,
    userPostsLoading: state.userData.postsLoading,
    editorOpened: state.userData.editorOpened,
    authUser: state.auth.authUser,
    darkTheme: state.theme.darkTheme,
    post: state.posts.post,
    isOpen: state.posts.isOpen,
  }),
  (dispatch) => ({
    loadUserData: bindActionCreators(loadUserData, dispatch),
    loadUserPostList: bindActionCreators(loadUserPostList, dispatch),
    openPost: bindActionCreators(openPost, dispatch),
    closePost: bindActionCreators(closePost, dispatch),
    openEditor: bindActionCreators(openEditor, dispatch),
    closeEditor: bindActionCreators(closeEditor, dispatch),
    updateUserData: bindActionCreators(updateUserData, dispatch),
  })
)(User);
