import { useEffect, useState } from 'react';
import { Meals } from '../types';

function Meals() {
  const [meals, setMeals] = useState<Meals[]>([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();
      setMeals(resData);
    }
    fetchMeals();
  }, []);

  function handleAddToCart(id: string) {
    console.log(id);
  }

  return (
    <ul id="meals">
      {meals.map(meal => (
        <li key={meal.id} className="meal-item">
          <article>
            <img src={`http://localhost:3000/${meal.image}`} />
            <div>
              <h3>{meal.name}</h3>
              <p className="meal-item-price">${meal.price}</p>
              <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
              <button
                className="button undefined"
                onClick={() => handleAddToCart(meal.id)}
              >
                Add to Cart
              </button>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default Meals;
