import styles from "./items.module.css";
export default function Items({ ingredient }) {
  return (
    <div>
      <div className={styles.ingredientContainer}>
        <div className={styles.ingredientImage}>
          <img
            className={styles.image}
            src={
              "https://spoonacular.com/cdn/ingredients_100x100/" +
              ingredient.image
            }
            alt={ingredient.name}
          />
        </div>

        <div className={styles.nameContainer}>
          <div className={styles.ingredientName}>{ingredient.name} </div>

          <div className={styles.ingredientAmount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
