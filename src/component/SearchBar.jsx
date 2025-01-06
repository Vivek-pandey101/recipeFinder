import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import myContext from "../contextApi/MyContext";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { fetchSearchDetail, RecipeSearchData, fetchDetail } =
    useContext(myContext);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchSearchDetail(searchValue);
  }, [searchValue]);
  const onclick = (id) => {
    fetchDetail(id);
  };
  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        placeholder="Search item here"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div
        className={searchValue.length > 0 ? styles.recipeLinkCont : styles.hide}
      >
        {RecipeSearchData ? (
          RecipeSearchData.map((recipe) => {
            return (
              <Link
                key={recipe.idMeal}
                className={styles.recipeLink}
                to={`/recipe/${recipe.idMeal}`}
                onClick={() => onclick(recipe.idMeal)}
              >
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p>{recipe.strTags}</p>
              </Link>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
