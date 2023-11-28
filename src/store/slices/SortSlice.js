import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sortOption",
  initialState: null,
  reducers: {
    onChangeOption(state, action) {
      return action.payload;
    },
  },
});

export const { onChangeOption } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
