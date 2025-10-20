// src/Todo/todoSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoSlice = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {
        // example of mock data
        return `/todos`;
      },
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
  }),
});

export const { useGetAllTodosQuery } = todoSlice;
