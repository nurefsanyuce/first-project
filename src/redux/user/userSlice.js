import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    list: JSON.parse(localStorage.getItem("user-list")) || {},
    single: {},
  },
  reducers: {
    getItem: (state, action) => {
      state.single = state.list[action.payload];
    },
    sendList: (state, action) => {
      state.list[action.payload.id] = action.payload;
      localStorage.setItem("user-list", JSON.stringify(state.list));
    },
    deleteUserItem: (state, action) => {
      const id = action.payload;
      delete state.list[id];
      localStorage.setItem("user-list", JSON.stringify(state.list));
    },
  },
});

export const { sendList, getItem, deleteUserItem } = userSlice.actions;

export default userSlice.reducer;
