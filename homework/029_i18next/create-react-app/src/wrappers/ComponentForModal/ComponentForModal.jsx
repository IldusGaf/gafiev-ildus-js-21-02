import React from 'react';
import './ComponentForModal.css';

const ComponentForModal = (props) => {
  return (
    <div className={`modal__wrapper ${props.isOpen && 'modal_open'}`}>
      <div className="close__container">
        <div className="close__button" onClick={props.closeModal}>
          x
        </div>
      </div>
      <div className="modal__body">{props.children}</div>
    </div>
  );
};

export default ComponentForModal;
