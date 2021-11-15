import React from 'react';
import './TaskBlock.css';
import { Props } from '../../types/types';

export class TaskBlock extends React.Component<Props> {
  render() {
    return (
      <div className="task-block">
        <div className="task-block__check">
          <input type="checkbox" className="task-block_checkbox" onClick={this.props.doneTask} />
        </div>
        <span className={`task-block__task-text ${this.props.done && 'done'}`}>{this.props.text}</span>
        <button className="task-block__del-btn" onClick={this.props.onClick} type="button">Удалить</button>
      </div>
    );
  }
}
