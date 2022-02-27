import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from '../components/PostForm/PostForm';
import PostFilter from "../components/PostFilter/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList/PostList";
import Pagination from "../components/UI/Pagination/Pagination";

const Posts = () => {
    const [posts,setPosts] = useState([
        {id: 1, title: 'AJS1', body: 'CJS1 body desc',},
        {id: 2, title: 'BJS2', body: 'BJS2 body desc',},
        {id: 3, title: 'CJS3', body: 'AJS3 body desc',},
    ]);
    const [modal, setModal] = useState(false);
    const [filter,setFilter] = useState({ sort: '', query: '' });
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isLoading, postError] = useFetching(async ()=> {
        const response = await PostService.getAll(limit,page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount,limit))
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => setPosts(posts.filter(p=>p.id !==post.id))

    const changePage = (page) => {
        setPage(page)
    }
    useEffect(()=>fetchPosts(),[page])
    return (
        <div className="App">
            <MyButton onClick={()=>setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={(modal)=>setModal(modal)}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <hr/>
            {isLoading ? <Loader/>
                : postError ? <h1>{postError}</h1>
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            }
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    );
};

export default Posts;