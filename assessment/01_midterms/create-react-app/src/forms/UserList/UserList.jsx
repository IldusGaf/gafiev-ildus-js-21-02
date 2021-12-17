import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import './UserList.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/loadUserList';
import UserPreview from '../../components/UserPreview/UserPreview';
import { Link } from 'react-router-dom';

const UserList = ({ darkTheme, users, total, loading, loadUserList }) => {
  const [current, setCurrent] = useState(0);
  const [pageSize, setPageSize] = useState(6);

  useEffect(() => {
    loadUserList(0, 6);
  }, []);

  const changePage = (page, limit) => {
    setCurrent(page);
    setPageSize(limit);
    loadUserList(page - 1, limit);
  };

  return loading ? (
    <div className="loader__container">
      <Loader />
    </div>
  ) : (
    <div className="users__page">
      <div className="users__container">
        {users.map((item, index) => (
          <Link to={`${item.id}`}>
            <UserPreview
              key={index}
              id={item.id}
              title={item.title}
              firstName={item.firstName}
              lastName={item.lastName}
              picture={item.picture}
              darkTheme={darkTheme}
            />
          </Link>
        ))}
      </div>
      <div className="users__footer">
        <Pagination
          size="small"
          current={current}
          pageSize={pageSize}
          total={total}
          onChange={changePage}
          pageSizeOptions={[6, 12, 24, 48, 96]}
        />
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    users: state.users.userList,
    total: state.users.total,
    loading: state.users.loading,
    darkTheme: state.theme.darkTheme,
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(UserList);
