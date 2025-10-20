import React, { useEffect } from 'react';
import { useLazyGetTodosQuery } from '../Todo/todoSlice';
import { useDeleteTodosMutation } from '../Todo/deleteTodoSlice';


const SingleTodo = ({ todo }) => {
    const { id: todoId, todo: name } = todo || {}
    const [trigger, { data, isLoading, error }] = useLazyGetTodosQuery();
    const [deleteTodo, result] = useDeleteTodosMutation();

    // console.log(deleteTodo);
    console.log(result);
    useEffect(() => {
        if (result.isSuccess) {
            alert('Todo Delete Successfully')
        }
    }, [result.isSuccess])

    const handleDtails = () => {
        trigger(todoId)
    }
    const handleDelete = () => {
        deleteTodo(todoId)
    }
    const getDetails = (isCompleted) => {
        let status = "Completed"
        if (!isCompleted) {
            status = "Pending...."
        }
        return status;
    }
    return (


        <div className=' p-2 mb-2 flex justify-between items-center gap-2 border-dotted border-b-2'>
            <p className='w-6/12'>{name}</p>
            <div>
                <button onClick={() => handleDtails()} className='bg-amber-200 p-2 border rounded-xl f'>Details </button>
                {isLoading && <span>Loading Details</span>}
                {data?.id && getDetails(data.completed)}
                <button onClick={() => handleDelete()} className='bg-red-300 p-2 border rounded-xl '>Delete </button>
            </div>

        </div>
    );
};

export default SingleTodo;