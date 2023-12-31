import { useContext } from 'react';
import { CartContext } from '../store/CartContext.tsx';
import { currencyFormatter } from '../util/formatting.ts';

import Button from './UI/Button.tsx';

function Meals() {
  const { cart, addToCart, meals } = useContext(CartContext);

  console.log(cart);
  console.log(meals);

  return (
    <ul id="meals">
      {meals.length === 0 && <p>No meals yet.</p>}
      {meals.length > 0 &&
        meals.map(meal => (
          <li key={meal.id} className="meal-item">
            <article>
              <img src={`http://localhost:3000/${meal.image}`} />
              <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">
                  {currencyFormatter.format(parseFloat(meal.price))}
                </p>
                <p className="meal-item-description">{meal.description}</p>
              </div>
              <p className="meal-item-actions">
                <Button text="Add to Cart" onClick={() => addToCart(meal.id)} />
              </p>
            </article>
          </li>
        ))}
    </ul>
  );
}

export default Meals;
