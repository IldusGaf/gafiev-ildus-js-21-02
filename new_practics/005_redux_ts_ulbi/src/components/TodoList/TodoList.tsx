import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import './todoList.css'

const TodoList = () => {
    const {todos, loading, error, limit, page} = useTypedSelector(state=>state.todo);
    const pages = [1,2,3,4,5];
    const { fetchTodos, setTodoPage } = useActions();
    useEffect(()=>{
        fetchTodos(limit, page)
    },[page])
    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map((todo: any)=>
                <div key={todo.id}>{todo.id} - {todo.title}</div>)}
            <div className={'pagination'}>
                {pages.map(p=>
                    <div key={p} className={page === p ? 'pagination__item_active': 'pagination__item'} onClick={()=>setTodoPage(p)}>{p}</div>
                )}
            </div>
        </div>
    );
};

export default TodoList;