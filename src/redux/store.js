import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import postsReducer from "./posts/postsSlice";
import categoriesSlice from "./categories/categoriesSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    posts: postsReducer,
    categories: categoriesSlice.reducer,
  },
});

export default store;
