/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Location, History } from 'history';
import {ResponseError, UserType} from '../../types/dumMyApiResponses';
import {getUserById} from "../../api/dumMyApi";
// @ts-ignore
import {useHistory, useParams} from 'react-router-dom';
import './UserPage.css'
import useScrollToTop from "../../hooks/useScrollToTop";

interface Params {
  id: string;
}
interface Props {
  history: History;
}
const UserPage = () => {
  useScrollToTop()
  const history = useHistory();
  //const hookMatch = useRouteMatch();
  const [user, setUser] = useState({} as UserType);
  const [loading, setLoading] = useState(true);
  // @ts-ignore
  const params = useParams<Params>();
  useEffect(() => {
    setLoading(true);
    // @ts-ignore
    getUserById(params.id, setUser, ({error}: ResponseError) => alert(error), () => setLoading(false));
  },[])
  return (
    <div className="user-page_form">
      {loading ? 'Идёт загрузка' :
        <div>
        <img src={user.picture}/>
        <div className={"user-page_card"}>
          <span>ID: {user.id}</span>
          <span>Fullname: {user.title} {user.firstName} {user.lastName}</span>
          <span>Gender: {user.gender}</span>
          <span>Email: {user.email}</span>
          <span>Date of birth: {user.dateOfBirth?.substr(0,10)}</span>
          <span>Register date: {user.registerDate?.substr(0,10)}</span>
        </div>
        </div>}
      {/* @ts-ignore */}
      <button type="button" onClick={history.goBack}>Вернуться назад</button>
    </div>
  );
};

export default UserPage;
