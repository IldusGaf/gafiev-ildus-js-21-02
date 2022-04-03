import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import { ThemeContext, ThemeContextProvider, ThemeContextState } from './contexts/ThemeContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {
                  (context: Partial<ThemeContextState>) => (
                    <div className={`App ${context.darkTheme && 'app_dark'}`}>
                      <Header />
                      <UserList />
                      <Footer />
                    </div>
                  )
              }
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
}

export default App;
