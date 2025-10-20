// src/Todo/todoSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoSlice = createApi({
  reducerPath: "todoApi",
  refetchOnFocus: true, //changing tab and refetching
  refetchOnReconnect: true,
  //keepUnusedDataFor: 2 ,// after 2 second automatically call Api.. Generally Redux cache data for 60s
    tagTypes:['addTodo', 'getAllTodo'], //For refetching todo after add and delete and update todo
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      //keepUnusedDataFor: 2, //Its can call indevidualy
      query: () => {
        // example of mock data
        return `/todos`;
      },
      providesTags: ['getAllTodo'],
      transformResponse: (data)=>{
        return data.todos || []
      }
    }),
    getTodos: builder.query({
      query: (id) => {
        // example of mock data
        return `/todos/${id}`;
      },
    }),
     addTodos: builder.mutation({
      query: (params) => {
        // example of mock data
        return {
            url:`/todos/add`,
            method:"POST",
            body: params,
         };
      },
      invalidatesTags:['getAllTodo'] // For refetching
     
    })
  }),
});

export const { useGetAllTodosQuery, useLazyGetTodosQuery, useAddTodosMutation } = todoSlice;
