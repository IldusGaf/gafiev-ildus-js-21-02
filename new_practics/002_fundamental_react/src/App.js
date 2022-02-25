import React, {useMemo, useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";


function App() {
     const [posts,setPosts] = useState([
         {id: 1, title: 'AJS1', body: 'CJS1 body desc',},
         {id: 2, title: 'BJS2', body: 'BJS2 body desc',},
         {id: 3, title: 'CJS3', body: 'AJS3 body desc',},
    ]);
     const [modal, setModal] = useState(false);
     const createPost = (newPost) => {
         setPosts([...posts, newPost])
         setModal(false)
     }
     const removePost = (post) => setPosts(posts.filter(p=>p.id !==post.id))

    const [filter,setFilter] = useState({ sort: '', query: '' });

    const sortedPosts = useMemo(() => {
         return filter.sort ? [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
                             : posts
          },[filter.sort,posts]);
    const sortedAndSearchedPosts = useMemo(()=> {
        return sortedPosts.filter((post)=> filter.sort === 'title'
            ? post.title.toLowerCase().includes(filter.query.toLowerCase())
            : post.body.toLowerCase().includes(filter.query.toLowerCase())
        )},[sortedPosts, filter.query])


  return (
    <div className="App">
        <MyButton onClick={()=>setModal(true)}>Создать пост</MyButton>
        <MyModal visible={modal} setVisible={(modal)=>setModal(modal)}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <hr/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
    </div>
  );
}

export default App;
