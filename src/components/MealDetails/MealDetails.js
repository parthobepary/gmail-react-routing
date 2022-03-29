import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DelMeal from "./DelMeal/DelMeal";

const MealDetails = () => {
  const idMeal = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal.idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [idMeal]);
  return (
    <div className="bg-indigo-900 text-white p-4 rounded-sm">
        {
            meal.map(meal => <DelMeal key={meal.idMeal} meal = {meal}></DelMeal>)
        }
    </div>
  );
};

export default MealDetails;
