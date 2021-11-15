import React from 'react';
import './Users.css';
import { UserType } from '../../types/dumMyApiResponses';
import ComponentWithHelper from '../../wrappers/ComponentWithHelper';
import { getUsersList } from '../../api/dumMyApi';
import { ThemeContextConsumer, ThemeContextState } from '../../contexts/ThemeContext';
import User from '../../components/User/User';
import PageButton from '../../components/PageButton/PageButton';

interface State {
  users: Array<UserType>;
  currentPage: number;
}

const initialState = {
  users: [],
  currentPage: 0,
};

const pageNumbers = [0, 1, 2, 3, 4];

export default class Users extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = initialState;
    this.loadUsers = this.loadUsers.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount(): void {
    this.loadUsers(0, 10);
  }

  loadUsers(page: number, limit: number) {
    getUsersList(page, limit, (resp: Array<UserType>) => this.setState({ users: resp }));
  }

  changePage(page: number) {
    this.setState({ currentPage: page });
    this.loadUsers(page, 10);
  }

  render() {
    return (
      <ThemeContextConsumer>
        {
        (context: Partial<ThemeContextState>) => (
          <div className="users-form">
            <div className="users-form__users">
              {this.state.users.length !== 0
                ? this.state.users.map((elem: UserType, index: number) => (
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
                    activeNumber={this.state.currentPage + 1}
                    onClick={() => this.changePage(item)}
                    key={item}
                  />
                ))}
              </div>
            </div>
          </div>

        )
}
      </ThemeContextConsumer>
    );
  }
}
