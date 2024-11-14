import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import postsReducer from "./posts/postsSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    posts: postsReducer,
  },
});

export default store;
