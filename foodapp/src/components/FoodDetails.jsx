import { useEffect } from "react";
import { useState } from "react";
import styles from "./fooddetails.module.css";
import IngredientList from "./IngredientList";

export default function FoodDetails({ foodId }) {
  const URLFOODID = import.meta.env.VITE_REACT_APP_FOODID_API_URL;
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const FOODIDURL = `${URLFOODID}/${foodId}/information`;
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${FOODIDURL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>  🍽️  {food.servings} Servings</strong>
          </span>
          <span>
            <strong>
              {food.vegiterian ? "🥦 Vegeterian" : "🥩 Non-Vegeterian"}{" "}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🌱 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          ＄
          <span>
            <strong>{food.pricePerServing / 100}  Per Serving.</strong>
          </span>
        </div>
        <h2>Ingredients</h2>

        <IngredientList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
