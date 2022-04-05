/* eslint-disable */
import React, {useEffect, useState} from 'react';
import './UserList.css';
import User from '../User/User';
import {getUserList} from "../../api/dummyAPI";
import {UserType} from "../../types/dummyAPIResponses";
import ComponentWithHelper from "../../wrappers/ComponentWithHelper/ComponentWithHelper";

const UserList = () => {
  const [userList, setUserList] = useState([] as Array<UserType>);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(()=>{
    getUserList(page, limit, (resp:Array<UserType>) => setUserList(resp),()=>console.log())
  },[page])
  return (
    <div className={'userList'}>
        {userList.map((elem,index) =>
            <ComponentWithHelper idComment={elem.id} key={index}>
              <User title={elem.title}
                    picture={elem.picture}
                    firstName={elem.firstName}
                    lastName={elem.lastName} />
            </ComponentWithHelper>
        )}
    </div>
  );
};

export default UserList;
