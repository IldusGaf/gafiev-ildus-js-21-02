import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post,setPost] = useState({});
    const [comments,setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async ()=> {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchCommById, isCommLoading, commError] = useFetching(async ()=> {
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById()
        fetchCommById()
    },[])
    return (
        <div>
            <h1>Open post page! {params.id}</h1>
            <div>
                <h5>Post</h5>
                {isLoading ? <Loader/> : post.title}
            </div>
            <div>
                <h5>Comments</h5>
                {isCommLoading ? <Loader/> : comments.map((comment)=>`${comment.name}${comment.body}`)}
            </div>
        </div>
    );
};

export default PostIdPage;