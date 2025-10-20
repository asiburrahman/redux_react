import React from 'react';

import SingleTodo from './SingleTodo';
import { useGetAllTodosQuery } from '../Todo/todoSlice';

const Todos = () => {
    const {data, isLoading, error} =  useGetAllTodosQuery();
    console.log(data);
    console.log(isLoading);
    console.log(error);
    
    return (
        <div>
            {data?.map(todo =><SingleTodo key={todo.id} todo={todo}></SingleTodo>)}
        </div>
    );
};

export default Todos;