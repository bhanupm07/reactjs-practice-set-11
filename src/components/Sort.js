import { useDispatch, useSelector } from "react-redux";
import { sortDescending, sortAscending, onChangeOption } from "../store";

export default function Sort() {
  const dispatch = useDispatch();
  const sortOption = useSelector((state) => {
    return state.sort;
  });

  if (sortOption === "price-high-to-low") {
    dispatch(sortDescending());
  } else if (sortOption === "price-low-to-high") {
    dispatch(sortAscending());
  }

  return (
    <form>
      <fieldset>
        <legend>Sort By</legend>
        <input
          type="radio"
          id="price-high-to-low"
          name="price"
          value="price-high-to-low"
          onChange={() => dispatch(onChangeOption("price-high-to-low"))}
        />
        <label htmlFor="price-high-to-low" style={{ marginRight: "1rem" }}>
          Price - High to Low
        </label>
        <input
          type="radio"
          id="price-low-to-high"
          name="price"
          value="price-low-to-high"
          onChange={() => dispatch(onChangeOption("price-low-to-high"))}
        />
        <label htmlFor="price-low-to-high">Price - Low to High </label>
      </fieldset>
    </form>
  );
}
