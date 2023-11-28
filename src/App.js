import React from "react";
import SearchBar from "./components/SearchBar";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import ListShow from "./components/ListShow";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: "2rem",
        }}
      >
        <SearchBar />
        <Sort />
        <Filter />
      </div>
      <ListShow />
    </>
  );
}
