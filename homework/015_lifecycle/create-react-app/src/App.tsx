import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import ComponentWithHelper from './wrappers/ComponentWithHelper';
import { ThemeContextConsumer, ThemeContextProvider } from './contexts/ThemeContext';
import Users from './forms/Users/Users';

class App extends React.Component {
  render() {
    return (

      <ThemeContextProvider>
        <ThemeContextConsumer>
          {
            (context) => (
              <div className={`App ${context.darkTheme && ' App_dark'}`}>
                <Header />
                <div className="body">
                  <div className="content">
                    <ComponentWithHelper comment="Это форма пользователей">
                      <Users />
                    </ComponentWithHelper>
                  </div>
                </div>
              </div>
            )
          }
        </ThemeContextConsumer>
      </ThemeContextProvider>
    );
  }
}

export default App;
