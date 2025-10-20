import React, { useState } from 'react';
import { useAddTodosMutation } from '../Todo/todoSlice';

const AddTodo = () => {
    const [data, setData] = useState('')
    const [addTodosData, result] = useAddTodosMutation();

    console.log(result);
    
const handleInputChange=(e)=>{
setData(e.target.value);

}

const handleAddTodo = ()=>{
setData(' ')
addTodosData({
    completed:false,
    userId: 123,
    todo: data
})

}
    return (
        <div className='flex justify-center gap-2'>
            <input onChange={handleInputChange} value={data} className='border rounded-xl text-black' type="text" />
            <button onClick={()=> handleAddTodo()} className='bg-amber-200 p-2 border rounded-xl f'>Add</button>
        </div>
    );
};

export default AddTodo;