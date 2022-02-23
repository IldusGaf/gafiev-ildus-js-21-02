import React, {useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

const PostForm = ({create}) => {
    const [post,setPost] = useState({title:'', body: ''})
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {...post, id: Date.now()};
        setPost({title:'', body: ''});
        create(newPost)
    };
    return (
        <form className={'postForm'}>
            <MyInput type={'text'} placeholder={'Введите название'} value={post.title} onChange={(e)=>setPost({...post, title: e.target.value })}/>
            <MyInput type={'text'} placeholder={'Введите описание'} value={post.body} onChange={(e)=>setPost({...post, body: e.target.value })}/>
            <MyButton type={'submit'} onClick={addNewPost}>Создай мне пост!</MyButton>
        </form>
    );
};

export default PostForm;
