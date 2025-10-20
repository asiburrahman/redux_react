import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice"
import postsReducer from "../features/posts/postsSlice"
import { todoSlice } from "../Todo/todoSlice";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        counters: counterReducer,
        posts: postsReducer,
        [todoSlice.reducerPath]: todoSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoSlice.middleware),
})
setupListeners(store.dispatch) //for refetch on change tab you have to do this
export default store;