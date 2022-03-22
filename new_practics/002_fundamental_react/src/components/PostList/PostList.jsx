import React from 'react';
import PostItem from "../PostItem/PostItem";
import './PostList.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    return (
        posts.length !== 0
        ? <div>
            <h1>{title}</h1>
            <div className={'postList__items'}>
                <TransitionGroup>
                        {posts.map((post, index)=>
                            <CSSTransition
                                key={posts.id}
                                timeout={500}
                                classNames="postItem"
                            >
                            <PostItem remove={remove} post={post} number={index+1}/>
                            </CSSTransition>
                        )}
                </TransitionGroup>
            </div>
          </div>
        : <h1>Список пуст</h1>
    );
};

export default PostList;
