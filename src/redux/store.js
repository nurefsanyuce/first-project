import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import postsReducer from "./posts/postsSlice";
import categoriesSlice from "./categories/categoriesSlice";

import { productsSlice } from "./products/productsSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    posts: postsReducer,
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
