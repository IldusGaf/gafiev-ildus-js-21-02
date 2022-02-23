import React from 'react';
import PostItem from "../PostItem/PostItem";
import './PostList.css'

const PostList = ({posts, title, remove}) => {
    return (
        posts.length !== 0
        ? <div>
            <h1>{title}</h1>
            <div className={'postList__items'}>
                {posts.map((post, index)=>
                    <PostItem remove={remove} post={post} number={index+1} key={post.id}/>
                )}
            </div>
          </div>
        : <h1>Список пуст</h1>
    );
};

export default PostList;
