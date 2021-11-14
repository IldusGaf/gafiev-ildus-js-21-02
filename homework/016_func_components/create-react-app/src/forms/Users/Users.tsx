import React, { useState } from 'react';
import './Users.css';
import { UserType } from '../../types/dumMyApiResponses';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper';
import { getUsersList } from '../../api/dumMyApi';
import { ThemeContext, ThemeContextState } from '../../contexts/ThemeContext';
import User from '../../components/User/User';
import PageButton from '../../components/PageButton/PageButton';
import useOnceOnMount from '../../hooks/useOnceOnMount';

const pageNumbers = [0, 1, 2, 3, 4];

export const Users = () => {
  const [users, setUsers] = useState([] as Array<UserType>);
  const [currentPage, setCurrentPage] = useState(0);

  const loadUsers = (page: number, limit: number) => {
    getUsersList(page, limit, (resp: Array<UserType>) => { setUsers(resp); });
  };

  useOnceOnMount(() => {
    loadUsers(0, 10);
  });

  const changePage = (page: number) => {
    setCurrentPage(page);
    loadUsers(page, 10);
  };
  return (
    <ThemeContext.Consumer>
      {
        (context: Partial<ThemeContextState>) => (
          <div className="users-form">
            <div className="users-form__users">
              {users.length !== 0
                ? users.map((elem: UserType, index: number) => (
                  <ComponentWithHelper comment={elem.id} key={index}>
                    {/* Компонент ниже попадёт в props.children компонента ComponentWithHelper */}
                    <User
                      title={elem.title}
                      firstName={elem.firstName}
                      lastName={elem.lastName}
                      picture={elem.picture}
                      className={context.darkTheme ? 'user_dark' : ''}
                    />
                  </ComponentWithHelper>
                ))
                : 'При загрузке произошла ошибка'}
            </div>
            <div className="pages">
              <div className="pages__items">
                {pageNumbers.map((item) => (
                  <PageButton
                    number={item + 1}
                    activeNumber={currentPage + 1}
                    onClick={() => changePage(item)}
                    key={item}
                  />
                ))}
              </div>
            </div>
          </div>

        )
}
    </ThemeContext.Consumer>
  );
};
