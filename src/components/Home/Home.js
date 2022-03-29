import React, { useEffect, useState } from "react";
import Meal from "./Meal/Meal";

const Home = () => {
  const [meals, setMeals] = useState([]);
  /* axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    .then((data) => setMeals(data.data.meals)); */
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-4 gap-3">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Home;
