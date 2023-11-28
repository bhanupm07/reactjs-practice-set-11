import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../components/data";

const dataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    searchFilter(state, action) {
      return data.filter((obj) => {
        return obj.name.toLowerCase().includes(action.payload);
      });
    },
    sortDescending(state, action) {
      return state.sort((a, b) => Number(b.price) - Number(a.price));
    },
    sortAscending(state, action) {
      return state.sort((a, b) => Number(a.price) - Number(b.price));
    },
    filter1(state, action) {
      return state.filter((obj) => {
        return !obj.inStock;
      });
    },
    filter2(state, action) {
      return state.filter((obj) => {
        return obj.fastDelivery;
      });
    },
    removeFilter1(state, action) {
      return data;
    },
    removeFilter2(state, action) {
      return data;
    },
  },
});

export const {
  searchFilter,
  sortDescending,
  sortAscending,
  filter1,
  filter2,
  removeFilter1,
  removeFilter2,
} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
