import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import postsReducer from "./posts/postsSlice";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
});

export default store;
