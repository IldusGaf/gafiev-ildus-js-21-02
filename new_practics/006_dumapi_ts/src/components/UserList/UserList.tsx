/* eslint-disable */
import React from 'react';
import './UserList.css';
import User from '../User/User';

const UserList = () => {
  const arr = ['1, 2, 3, 4, 5', 'any1', 'any2', "any3", "any4", "any5"];
  return (
    <div className={'userList'}>
        {arr.map((elem,index) =>
        <User caption={elem} key={index}/>
        )}
    </div>
  );
};

export default UserList;
