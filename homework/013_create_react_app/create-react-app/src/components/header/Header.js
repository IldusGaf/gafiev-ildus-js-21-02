import React from 'react'
import './Header.css'

export class Header extends React.Component {
  render() {
    return <header className="header">
      <h1>Интернет-магазин "Не только красивое"</h1>
      {/*<label className="theme-change">Темная тема</label>
     Какой компонент<div className="loader"></div>*/}
    </header>
  }
}
