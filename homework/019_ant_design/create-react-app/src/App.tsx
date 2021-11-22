import React, { useState } from 'react';
import {
  Route, Switch, HashRouter, // Navigate,
} from 'react-router-dom';
import './App.css';

import { Layout } from 'antd';
import ComponentWithHelper from './wrappers/ComponentWithHelper';
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext';
import { Users } from './forms/Users/Users';
import UserPage from './forms/UserPage/UserPage';
import { Header } from './components/Header/Header';
import { RegForm } from './forms/RegPage/RegPage';

const App = () => {
  const [pageType, setPageType] = useState('users');

  const handleMenuClick = (event: any) => {
    setPageType(event.key);
  };
  const handleRegClick = () => {
    setPageType('users');
  };
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {
            (context) => (
              <HashRouter>
                <div className={`App ${context.darkTheme && ' App_dark'}`}>
                  <Layout className="layout">
                    <Header onClick={handleMenuClick} name={(pageType === 'users') ? 'Пользователи' : 'Регистрация'} />
                    <div className="body">
                      <div className="content">
                        <ComponentWithHelper comment="Это форма пользователей">
                          <Switch>
                            <Route exact path={'/' /* Содержимое будет отрендерено, если соответствует начало пути */}>
                              <Users />
                            </Route>
                            <Route path={'/user/:id' /* Содержимое будет отрендерено, если соответствует начало пути */}>
                              <UserPage />
                            </Route>
                            <Route exact path={'/create' /* Содержимое будет отрендерено, если соответствует начало пути */}>
                              <RegForm onClick={handleRegClick} />
                            </Route>

                          </Switch>
                        </ComponentWithHelper>
                      </div>
                    </div>
                  </Layout>
                </div>
              </HashRouter>
            )
          }
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
};

export default App;
