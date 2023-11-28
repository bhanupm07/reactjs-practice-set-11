import { configureStore } from "@reduxjs/toolkit";
import {
  dataReducer,
  searchFilter,
  sortDescending,
  sortAscending,
  filter1,
  filter2,
  removeFilter1,
  removeFilter2,
} from "./slices/DataSlice";
import { searchReducer, onChange } from "./slices/SearchSlice";
import { sortReducer, onChangeOption } from "./slices/SortSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    sort: sortReducer,
    search: searchReducer,
  },
});

export {
  store,
  onChange,
  searchFilter,
  sortDescending,
  sortAscending,
  filter1,
  filter2,
  removeFilter1,
  removeFilter2,
  onChangeOption,
};
