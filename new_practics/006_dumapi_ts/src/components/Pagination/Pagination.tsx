import React, { useContext } from 'react';
import './Pagination.css';
import { ThemeContext } from '../../contexts/ThemeContext';

interface Props {
  totalPages: Array<number>,
  currentPage: number,
  callback: (p: number)=> void,
}

const Pagination = ({ totalPages, currentPage, callback }: Props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`pagination ${themeContext.darkTheme && 'pagination_dark'}`}>
      {totalPages.map((p) => (
        <div
          className={`pagination__item ${currentPage === p && 'pagination__item-current'}`}
          key={p}
          onClick={() => callback(p)}
        >
          {p + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
