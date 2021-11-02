import React from 'react'
import './Sidebar.css'


export class Sidebar extends React.Component {
  render() {
    return <section className="sidebar">
      <article className="filter-item">
        <h2 className="filter-item__header">Морская рыба</h2>
        <ul className="filter-item__list">
          <li className="filter-item__list-item"><label><input type="checkbox" name="seafish" value="1"/>Акула</label>
          </li>
          <li className="filter-item__list-item"><label><input type="checkbox" name="seafish" value="1"/>Окунь</label>
          </li>
          <li className="filter-item__list-item"><label><input type="checkbox" name="seafish" value="1"/>Палтус</label>
          </li>
          <li className="filter-item__list-item"><label><input type="checkbox" name="seafish" value="1"/>Треска</label>
          </li>
        </ul>
      </article>
      <article className="filter-item">
        <h2 className="filter-item__header">Пресноводная рыба</h2>
        <ul className="filter-item__list">
          <li className="filter-item__list-item">
            <label><input type="checkbox" name="freshwaterfish" value="1"/>Белоглазка</label>
          </li>
          <li className="filter-item__list-item">
            <label><input type="checkbox" name="freshwaterfish" value="1"/>Осетр</label>
          </li>
          <li className="filter-item__list-item">
            <label><input type="checkbox" name="freshwaterfish" value="1"/>Речной угорь</label>
          </li>
          <li className="filter-item__list-item"><label>
            <input type="checkbox" name="freshwaterfish" value="1"/>Налим</label>
          </li>
        </ul>
      </article>
    </section>
      }
}
