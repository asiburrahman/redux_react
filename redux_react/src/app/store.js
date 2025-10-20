import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice"
import postsReducer from "../features/posts/postsSlice"
import { todoSlice } from "../Todo/todoSlice";

const store = configureStore({
    reducer: {
        counters: counterReducer,
        posts: postsReducer,
        [todoSlice.reducerPath]: todoSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoSlice.middleware),
})

export default store;