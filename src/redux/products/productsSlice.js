import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: JSON.parse(localStorage.getItem("products-list")) || {},
    single: {},
  },
  reducers: {
    getItem: (state, action) => {
      state.single = state.list[action.payload];
    },
    sendProd: (state, action) => {
      state.list[action.payload.id] = action.payload;
      localStorage.setItem("products-list", JSON.stringify(state.list));
    },
    deleteProdItem: (state, action) => {
      const id = action.payload;
      delete state.list[id];
      localStorage.setItem("products-list", JSON.stringify(state.list));
    },
  },
});

export const { sendProd, getItem, deleteProdItem } = productsSlice.actions;
export default productsSlice.reducer;
