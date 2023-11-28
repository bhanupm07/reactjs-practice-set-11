import { useSelector, useDispatch } from "react-redux";
import { onChange, searchFilter } from "../store";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.search;
  });
  console.log(searchTerm);

  const handleInputChange = (e) => {
    dispatch(onChange(e.target.value));
    // dispatch(searchFilter(searchTerm));
  };

  const handleBtnClick = () => {
    dispatch(searchFilter(searchTerm));
  };

  return (
    <div className="search-bar-main">
      <input
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleBtnClick}>Search</button>
    </div>
  );
}
