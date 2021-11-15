import React from 'react';
import './AddBlock.css';
import { Props } from '../../types/types';

export class AddBlock extends React.Component<Props> {
  render() {
    return (
      <div className="add-block">
        <p>Добавьте задание</p>
        <div className="add-block__input-container">
          <input type="text" value={this.props.text} onChange={this.props.onChange} className="input" />
          <button className="add-block__add-button" type={'button'} onClick={this.props.onClick}>Добавить</button>
        </div>
      </div>
    );
  }
}
