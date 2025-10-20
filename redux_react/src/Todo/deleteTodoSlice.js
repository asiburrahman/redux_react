import { todoSlice } from "./todoSlice";

export const deleteTodoSlice = todoSlice.injectEndpoints({
  endpoints: (builder) => ({
   deleteTodos: builder.mutation({
      query: (id) => (
        // example of mock data
         {
            url:`/todos/${id}`,
            method:"DELETE"
         }
         ),
         onQueryStarted: (id,{dispatch})=>{  //If I wants to change delete instantly from UI we have to use this code
            dispatch(todoSlice.util.updateQueryData(
                'getAllTodos',
                undefined,
                (todos)=>{
                    const newTodos = todos.filter((todo)=> todo.id !== id);
                    return newTodos;
                }
            )
        )
        }
     
    })
    })
    })

    export const {useDeleteTodosMutation} = todoSlice