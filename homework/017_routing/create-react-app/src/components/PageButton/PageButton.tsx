import React from 'react';
import './PageButton.css';

interface Props {
  activeNumber: number;
  number: number;
  onClick: () => void;
}

const PageButton = ({ activeNumber, number, onClick }: Props) => (
  <div className="page-button">
    <button className={`${(activeNumber === number) && 'button_active'}`} onClick={onClick} type="button">{number}</button>
  </div>
);

export default PageButton;
