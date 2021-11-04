import React from 'react'
import './Сategory.css'


export class Category extends React.Component {
  render(){
    return  <div className="div category-item__block">
        <a href="#" className="category-item__link">{this.props.linkText}</a>
        <p className="category-item__p">{this.props.pText}</p>
      </div>
  }
}
