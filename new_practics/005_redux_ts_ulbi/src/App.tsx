import React from 'react';
import './App.css';
import UserList from "./components/UserList/UserList";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
        <UserList/>
        <hr/>
        <TodoList/>
    </div>
  );
}

export default App;
