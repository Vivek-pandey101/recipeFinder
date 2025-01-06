import { useState, useEffect } from "react";
import myContext from "./MyContext";

function MyState(props) {
  const [RecipeData, setRecipeData] = useState([]);
  const [RecipeSearchData, setRecipeSearchData] = useState([]);
  const [RecipeDetail, setRecipeDetail] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const { meals } = await response.json();

      if (meals) {
        setRecipeData(meals); // Set state only if meals exist
      } else {
        console.warn("No meals found!");
        setRecipeData([]); // Set to an empty array if no meals are returned
      }
    } catch (error) {
      console.error("Failed to fetch meals:", error);
    }
  };

  const fetchDetail = async (id) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      // console.log(data.meals);
      setRecipeDetail(data);
    } catch (error) {
      console.error("Failed to fetch meal details:", error);
    }
  };

  const fetchSearchDetail = async (mealName) => {
    // Skip API call if input is empty
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      // console.log(data.meals);
      setRecipeSearchData(data.meals || []);
    } catch (error) {
      console.error("Failed to fetch meal details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <myContext.Provider
      value={{
        RecipeData,
        fetchDetail,
        RecipeDetail,
        fetchSearchDetail,
        RecipeSearchData,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}

export default MyState;
