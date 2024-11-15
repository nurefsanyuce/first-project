import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: JSON.parse(localStorage.getItem("posts-list")) || {},
    single: {},
  },
  reducers: {
    getItem: (state, action) => {
      state.single = state.list[action.payload];
    },
    sendPost: (state, action) => {
      state.list[action.payload.id] = action.payload;
      localStorage.setItem("posts-list", JSON.stringify(state.list));
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      delete state.list[id];
      localStorage.setItem("posts-list", JSON.stringify(state.list));
    },
  },
});

export const { sendPost, getItem, deleteItem } = postsSlice.actions;
export default postsSlice.reducer;
