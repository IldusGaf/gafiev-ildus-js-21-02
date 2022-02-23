import React from 'react';
import './PostItem.css'
import MyButton from "../UI/Button/MyButton";
const PostItem = (props) => {
    return (
        <div className={'post'}>
            <div className={'post__content'}>
                <strong>{props.number}. {props.post.title}</strong>
                <span>{props.post.body}</span>
            </div>
            <div className={'post__btns'}>
                <MyButton type={'button'} onClick={()=>props.remove(props.post)}>Удолить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
