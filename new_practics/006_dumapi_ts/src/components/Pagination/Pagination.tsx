/*eslint-disable*/
import React from 'react';

interface Props {
  totalPages: Array<number>,
  callback: (p: number)=> void,
}

const Pagination = ({ totalPages, callback }: Props) => (
  <div>
    {totalPages.map((p, index)=>
        <span key={index} onClick={()=>callback(p)}>{p}</span>
    )}
  </div>
);

export default Pagination;
