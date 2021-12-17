import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthForm from './forms/AuthForm/AuthForm';
import PostList from './forms/PostList/PostList';
import UserList from './forms/UserList/UserList';
import User from './forms/User/User';
import RegForm from './forms/RegForm/RegForm';

const App = function ({ darkTheme }) {
  return (
    <HashRouter>
      <div className={`App ${darkTheme && 'App__dark'}`}>
        <header className={darkTheme && 'header-footer__dark'}>
          <div className="content-wrapper">
            <Header darkTheme={darkTheme} />
          </div>
        </header>
        <main>
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/auth" element={<AuthForm />} />
              <Route path="/reg" element={<RegForm />} />
            </Routes>
          </div>
        </main>
        <footer className={darkTheme && 'header-footer__dark'}>
          <div className="content-wrapper">
            <Footer />
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default connect(
  (state) => ({
    darkTheme: state.theme.darkTheme,
  }),
  () => {}
)(App);
