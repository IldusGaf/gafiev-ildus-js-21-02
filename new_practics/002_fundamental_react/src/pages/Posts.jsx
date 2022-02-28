import React, {useEffect, useRef, useState} from 'react';
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
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/MySelect/MySelect";

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter,setFilter] = useState({ sort: '', query: '' });
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isLoading, postError] = useFetching(async ()=> {
        const response = await PostService.getAll(limit,page);
        setPosts([...posts, ...response.data]);
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
    useObserver(lastElement,isLoading,page<totalPages, ()=>setPage(page+1));
    useEffect(()=>fetchPosts(),[page])
    return (
        <div className="App">
            <MyButton onClick={()=>setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={(modal)=>setModal(modal)}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={(value)=>setLimit(value)}
                defaultValue={'Кол-во элементов на странице'}
                options={[
                    {value:5, name:'5'},
                    {value:10, name:'10'},
                    {value:25, name:'25'},
                    {value:-1, name:'Показать все'},
                ]}
            />
            <hr/>
            {postError ? <h1>{postError}</h1>
                       : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            }
            <div className={'last-element'} ref={lastElement}/>
            {isLoading && <Loader/>
            }
        </div>
    );
};

export default Posts;