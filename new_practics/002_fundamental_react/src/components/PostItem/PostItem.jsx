import React from 'react';
import './PostItem.css'
import MyButton from "../UI/Button/MyButton";
import {useNavigate } from "react-router-dom";
const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className={'post'}>
            <div className={'post__content'}>
                <strong>{props.post.id}. {props.post.title}</strong>
                <span>{props.post.body}</span>
            </div>
            <div className={'post__btns'}>
                <MyButton type={'button'} onClick={()=>props.remove(props.post)}>Удалить</MyButton>
                <MyButton type={'button'} onClick={()=>router(`${props.post.id}`)}>Открыть</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
