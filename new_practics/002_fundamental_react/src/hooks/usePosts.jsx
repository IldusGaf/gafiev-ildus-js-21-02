import {useMemo} from "react";

 const useSortedPosts = (posts,sort) => useMemo(() => {
        return sort ? [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
            : posts
    },[sort,posts]);

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts,sort);
    return useMemo(()=> {
        return sortedPosts.filter((post)=> sort === 'title'
            ? post.title.toLowerCase().includes(query.toLowerCase())
            : post.body.toLowerCase().includes(query.toLowerCase())
        )},[sortedPosts, query]
    )
}



