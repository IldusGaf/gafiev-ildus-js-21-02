import React from 'react'
import {apiResponse} from "../../api-mock/api.js";
import {Category} from "../../components/category/Сategory";

export class Categories extends React.Component {
  render() {
    return <section className="category-item">
      {apiResponse.status === 'ok' ?
        apiResponse.category.map((elem, index) => <Category linkText = {elem.linkText} pText={elem.pText} key={index}/>) :
        'При загрузке произошла ошибка'
      }
    </section>
  }
}
