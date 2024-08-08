import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "722dda5fd2504ab3a3faf9893731bffa";

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
      }

    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
