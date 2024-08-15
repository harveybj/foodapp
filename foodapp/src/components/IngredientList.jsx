import Items from "./Items";

export default function IngredientList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((ingredient) => (
          <Items ingredient={ingredient} />
        ))
      )}
    </div>
  );
}
