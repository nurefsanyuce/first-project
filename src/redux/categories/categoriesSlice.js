import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: JSON.parse(localStorage.getItem("categories-list")) || {},
    single: {},
  },
  reducers: {
    getItem: (state, action) => {
      state.single = state.list[action.payload];
    },
    sendCate: (state, action) => {
      state.list[action.payload.id] = action.payload;
      localStorage.setItem("categories-list", JSON.stringify(state.list));
    },
    deleteCateItem: (state, action) => {
      const id = action.payload;
      delete state.list[id];
      localStorage.setItem("categories-list", JSON.stringify(state.list));
    },
  },
});
export const { sendCate, getItem, deleteCateItem } = categoriesSlice.actions;
export default categoriesSlice;
