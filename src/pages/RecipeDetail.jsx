import React, { useContext } from "react";
import myContext from "../contextApi/MyContext";
import { Link } from "react-router-dom";
import { LiaHandPointLeftSolid } from "react-icons/lia";
import styles from "./RecipeDetail.module.css";

const RecipeDetail = () => {
  const { RecipeDetail } = useContext(myContext);

  return (
    <div className={styles.recipeDetail}>
      <Link to={"/"} className={styles.back}>
        {" "}
        <LiaHandPointLeftSolid /> Back
      </Link>
      {RecipeDetail &&
        RecipeDetail.meals.map((recipe) => {
          return (
            <div key={recipe.idMeal} className={styles.recipe}>
              <h2>{recipe.strMeal}</h2>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p className={styles.category}>Category: {recipe.strCategory}</p>
              <br />
              <p>From: {recipe.strArea}</p>
              <br />
              <p>Instructions: {recipe.strInstructions}</p>
              <br />
              <a
                href={recipe.strYoutube}
                target="_blank"
                className={styles.YTsource}
              >
                Watch on YouTube
              </a>
              <br />
              <a
                href={recipe.strSource}
                target="_blank"
                className={styles.source}
              >
                Source
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default RecipeDetail;
