import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible = false, setVisible}) => {
    return (
        <div className={`${cl.myModal} ${visible && cl.myModal__active}`} onClick={()=>setVisible(false)}>
            <div className={cl.myModal__content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;