import React, { useEffect, useState } from 'react';
import './UserList.css';
import User from '../User/User';
import { getUserList } from '../../api/dummyAPI';
import { UserListResponse, UserType } from '../../types/dummyAPIResponses';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper/ComponentWithHelper';
import { getPageCount, getPagesArray } from '../../utils/pages';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';

const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([] as Array<UserType>);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getUserList(page,
      limit,
      (resp:UserListResponse) => {
        setUserList(resp.data);
        setTotalCount(resp.total);
      },
      () => console.log,
      () => setLoading(false));
  }, [page]);

  const pageArr: Array<number> = getPagesArray(getPageCount(totalCount, limit));
  return (
    <div className="user_page">
      <div className="user-list">
        {loading ? <Loader /> : userList.map((elem, index) => (
          <ComponentWithHelper idComment={elem.id} key={index}>
            <User
              title={elem.title}
              picture={elem.picture}
              firstName={elem.firstName}
              lastName={elem.lastName}
            />
          </ComponentWithHelper>
        ))}
      </div>
      <Pagination totalPages={pageArr} currentPage={page} callback={setPage} />
    </div>
  );
};

export default UserList;
