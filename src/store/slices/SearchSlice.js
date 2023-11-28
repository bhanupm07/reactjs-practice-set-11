import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    onChange(state, action) {
      return action.payload;
    },
  },
});

export const { onChange } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
