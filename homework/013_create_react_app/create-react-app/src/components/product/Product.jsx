import React from 'react'
import './Product.css'

export class Product extends React.Component {
  render(){
    return <div className="div product-list__block">
        <figure className="product-list__pic">
            <img src={this.props.srcImg} alt="test img"/>
        </figure>
        <div className="product-list__caption">
                <a href="#" className="product-list__caption-link">{this.props.linkText}</a>
            <input className="product-list__caption-button" type="submit" name="buy" value="Купить"/>
        </div>
    </div>
  }
}
