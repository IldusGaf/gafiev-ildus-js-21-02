import React from 'react'
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Categories} from "./main/categories/Сategories";
import {Footer} from "./components/footer/Footer";
import {Products} from "./main/products/Products";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <body className="body">
          <Header/>
          <Sidebar/>
          {/*<div className={'sidebar-container'}>
            <Sidebar/>
          </div>*/}
          <main className='content'>
              <h2>Рыбы на любой вкус</h2>
              <p>Мы продаем рыбы, а не только показываем!</p>
              <Categories/>
              <h3>Популярные</h3>
              <Products/>
          </main>
          <Footer/>
        </body>
      </div>
    );
  }
}

export default App;
