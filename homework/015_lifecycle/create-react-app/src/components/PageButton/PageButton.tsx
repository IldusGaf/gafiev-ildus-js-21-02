import React from 'react';
import './PageButton.css';

interface Props {
  activeNumber: number;
  number: number;
  onClick: () => void;
}
const initialState = { active: false };
export default class PageButton extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="page-button">
        <button className={`${(this.props.activeNumber === this.props.number) && 'button_active'}`} onClick={this.props.onClick} type="button">{this.props.number}</button>
      </div>
    );
  }
}
