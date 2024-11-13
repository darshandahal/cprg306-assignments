"use client";
import React, { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
  // State to hold the list of meal ideas
  const [meals, setMeals] = useState([]);

  // Function to fetch meals based on the ingredient
  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  // Load meal ideas when the component mounts or ingredient changes
  const loadMealIdeas = async () => {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  // Render meal ideas
  return (
    <div className="text-white">
      <h2 className="text-xl font-bold">Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-2 border-b border-gray-700">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
