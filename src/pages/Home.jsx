import React from "react";
import SearchBar from "../component/SearchBar";
import Recipe from "../component/Recipe";

const Home = () => {
  return (
    <div>
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="recipe">
        <Recipe />
      </div>
    </div>
  );
};

export default Home;
