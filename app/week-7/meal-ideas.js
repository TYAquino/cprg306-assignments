"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  if (!ingredient) {
    return <p className="text-lg">Select an item to see meal ideas :D</p>;
  }

  if (meals.length === 0) {
    return <p className="text-lg">No meal ideas for {ingredient}</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      <ul className="list-none mb-0">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="py-2 border-b border-gray-200">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
