import React from 'react'
import './Footer.css'

export class Footer extends React.Component {
  render() {
    return <footer className="footer">
      <p><a className="footer__link" href="#">Контакты</a></p>
      <p>&copy; 2021 ИП Рыбов О.А.</p>
    </footer>
  }
}
