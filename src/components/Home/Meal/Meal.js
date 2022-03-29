import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = meal;

  //create dynamic path and send data using event handelrer
  const navigate = useNavigate();
  const details = () => {
    const path = `/home/meal/${idMeal}`;
    navigate(path);
  };
  return (
    <div className="bg-gray-800 p-4 text-yellow-100 rounded-lg mt-3">
      <h1 className="text-xl pb-2">{strMeal}</h1>
      <img className="w-3/4 mx-auto rounded-sm" src={strMealThumb} alt="" />
      <p className="pt-2">{strInstructions.slice(1, 100)}</p>
      <button
        onClick={details}
        className="w-full bg-orange-400 mt-3 py-2 rounded-3xl"
      >
        details
      </button>
      <div className="w-full bg-orange-400 mt-3 py-2 rounded-3xl">
        <Link to={`/home/meal/${idMeal}`}>Face book</Link>
      </div>
    </div>
  );
};

export default Meal;
