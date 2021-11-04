import React from 'react'
import './Products.css'
import {apiResponse} from "../../api-mock/api.js";
import {Product} from "../../components/product/Product";

export class Products extends React.Component {
  render() {
    return <section className="product-list">
      {apiResponse.status === 'ok' ?
        apiResponse.product.map((elem, index) => <Product srcImg = {elem.srcImg} linkText={elem.linkText} key={index}/>) :
        'При загрузке произошла ошибка'
      }
    </section>
  }
}
