import { useContext } from 'react';
import CartContext from '../store/CartContext.tsx';
import { MealItemProps } from '../types.ts';

import { currencyFormatter } from '../util/formatting.ts';

import Button from './UI/Button.tsx';

function MealItem({ meal }: MealItemProps) {
  const { addItem } = useContext(CartContext);

  return (
    <li className="meal-item">
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
          <Button text="Add to Cart" onClick={() => addItem(meal)} />
        </p>
      </article>
    </li>
  );
}

export default MealItem;
