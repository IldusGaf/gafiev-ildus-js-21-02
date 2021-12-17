import React from 'react';
import {
  Route, Switch, HashRouter, // Navigate,
} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import ComponentWithHelper from './wrappers/ComponentWithHelper';
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext';
import { Users } from './forms/Users/Users';
import UserPage from './forms/UserPage/UserPage';

class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {
            (context) => (
              <HashRouter>
                <div className={`App ${context.darkTheme && ' App_dark'}`}>
                  <Header />
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
                        </Switch>
                      </ComponentWithHelper>
                    </div>
                  </div>
                </div>
              </HashRouter>
            )
          }
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    );
  }
}

export default App;
