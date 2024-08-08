import { useEffect, useState } from "react";
import styles from "./search.module.css";


const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const URL = import.meta.env.VITE_REACT_APP_API_URL;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //   useEffect(() => {
  //     async function fetchFood() {
  //         const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
  //         const data = await res.json();
  //         console.log(data.results);
  //         setFoodData(data.results);
  //       }

  //     fetchFood();
  //   }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
