import React, { useState } from 'react';
import './ComponentWithHelper.css';

const ComponentWithHelper = (props) => {
  const [hovered, setHovered] = useState(false);

  const mouseOver = (event) => {
    setHovered(true);
    event.stopPropagation();
  };

  const mouseOut = (event) => {
    setHovered(false);
    event.stopPropagation();
  };

  return (
    <div className="helper-wrapper" onMouseOut={mouseOut} onMouseOver={mouseOver}>
      {hovered && <div className="helper-wrapper__helper">{props.text}</div>}
      {props.children}
    </div>
  );
};

export default ComponentWithHelper;
