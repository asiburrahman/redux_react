import { todoSlice } from "./todoSlice";

export const deleteTodoSlice = todoSlice.injectEndpoints({
  endpoints: (builder) => ({
   deleteTodos: builder.mutation({
      query: (id) => {
        // example of mock data
        return {
            url:`/todos/${id}`,
            method:"DELETE"
         };
      },
     
    })
    })
    })

    export const {useDeleteTodosMutation} = todoSlice