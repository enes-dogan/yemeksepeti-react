import { useState, useEffect } from 'react';
import { MealType } from '../types.ts';

import MealItem from './MealItem.tsx';

function Meals() {
  const [meals, setMeals] = useState<MealType[]>([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');

      if (response.ok) {
        const resData = await response.json();

        setMeals(resData);
      }
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.length > 0 &&
        meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}

export default Meals;
