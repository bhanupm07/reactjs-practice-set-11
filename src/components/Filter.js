import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filter1,
  filter2,
  removeFilter1,
  removeFilter2,
  sortDescending,
  sortAscending,
  searchFilter,
} from "../store";

export default function Filter() {
  const dispatch = useDispatch();
  const sortOption = useSelector((state) => state.sort);
  const searchTerm = useSelector((state) => state.search);
  const [checkboxes, setCheckboxes] = useState({
    out_of_stock: false,
    fast_delievery: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
    console.log(checkboxName);

    // Dispatch corresponding filter or removeFilter action based on the checkbox state
    if (checkboxName === "out_of_stock") {
      if (!checkboxes.out_of_stock) {
        dispatch(filter1());
      } else if (checkboxes.fast_delievery) {
        searchTerm
          ? dispatch(searchFilter(searchTerm))
          : dispatch(removeFilter1());
        dispatch(filter2());
      } else {
        searchTerm
          ? dispatch(searchFilter(searchTerm))
          : dispatch(removeFilter1());
      }
    }

    if (checkboxName === "fast_delievery") {
      if (!checkboxes.fast_delievery) {
        dispatch(filter2());
      } else if (checkboxes.out_of_stock) {
        searchTerm
          ? dispatch(searchFilter(searchTerm))
          : dispatch(removeFilter2());
        dispatch(filter1());
      } else {
        searchTerm
          ? dispatch(searchFilter(searchTerm))
          : dispatch(removeFilter2());
      }
    }

    if (sortOption) {
      if (sortOption === "price-high-to-low") {
        dispatch(sortDescending());
      } else {
        dispatch(sortAscending());
      }
    }
  };

  return (
    <form>
      <fieldset>
        <legend>Filter By</legend>
        <input
          type="checkbox"
          id="out-of-stock"
          name="out-of-stock"
          value="out-of-stock"
          checked={checkboxes.out_of_stock}
          onChange={() => handleCheckboxChange("out_of_stock")}
        />
        <label for="out-of-stock" style={{ marginRight: "1rem" }}>
          Out of Stock
        </label>
        <input
          type="checkbox"
          id="fast-delivery"
          name="fast-delivery"
          value="fast-delivery"
          checked={checkboxes.fast_delievery}
          onChange={() => handleCheckboxChange("fast_delievery")}
        />
        <label for="fast-delivery">Fast Delievery Only</label>
      </fieldset>
    </form>
  );
}
