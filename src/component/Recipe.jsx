import React, { useContext } from "react";
import myContext from "../contextApi/MyContext";
import styles from "./Recipe.module.css";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Recipe = () => {
  const { RecipeData, fetchDetail } = useContext(myContext);

  const onclick = (id) => {
    fetchDetail(id);
  };

  return (
    <div className={styles.recipeContainer}>
      {RecipeData &&
        RecipeData.map((recipe) => {
          return (
            <div key={recipe.idMeal} className={styles.recipe}>
              <h2>{recipe.strMeal}</h2>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p>From: {recipe.strArea}</p>
              <a
                href={recipe.strYoutube}
                target="_blank"
                className={styles.YTsource}
              >
                <LiaHandPointRightSolid />
                Watch on YouTube
              </a>
              <br />
              <a
                href={recipe.strSource}
                target="_blank"
                className={styles.source}
              >
                <LiaHandPointRightSolid />
                Source
              </a>
              <Link
                className={styles.readMore}
                onClick={() => onclick(recipe.idMeal)}
                to={`/recipe/${recipe.idMeal}`}
              >
                Read More
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Recipe;
