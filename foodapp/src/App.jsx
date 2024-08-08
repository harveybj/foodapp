import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Search key={foodData} foodData={foodData} setFoodData={setFoodData} />
      <Foodlist foodData={foodData} />
    </div>
  );
}

export default App;
