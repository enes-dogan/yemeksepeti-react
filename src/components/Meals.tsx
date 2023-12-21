import logoImg from '../assets/logo.jpg';

function Meals() {
  return (
    <ul id="meals">
      <li className="meal-item">
        <article>
          <img src={logoImg} />
          <div>
            <h3>Grilled Chicken Sandwich</h3>
            <p className="meal-item-price">$15.53</p>
            <p className="meal-item-description">
              Tender grilled chicken breast with avocado, bacon, lettuce, and
              honey mustard on a toasted bun.
            </p>
          </div>
          <p className="meal-item-actions">
            <button className="button undefined">Add to Cart</button>
          </p>
        </article>
      </li>
      <li className="meal-item">
        <article>
          <img src={logoImg} />
          <div>
            <h3>Grilled Chicken Sandwich</h3>
            <p className="meal-item-price">$15.53</p>
            <p className="meal-item-description">
              Tender grilled chicken breast with avocado, bacon, lettuce, and
              honey mustard on a toasted bun.
            </p>
          </div>
          <p className="meal-item-actions">
            <button className="button undefined">Add to Cart</button>
          </p>
        </article>
      </li>
      <li className="meal-item">
        <article>
          <img src={logoImg} />
          <div>
            <h3>Grilled Chicken Sandwich</h3>
            <p className="meal-item-price">$15.53</p>
            <p className="meal-item-description">
              Tender grilled chicken breast with avocado, bacon, lettuce, and
              honey mustard on a toasted bun.
            </p>
          </div>
          <p className="meal-item-actions">
            <button className="button undefined">Add to Cart</button>
          </p>
        </article>
      </li>
      <li className="meal-item">
        <article>
          <img src={logoImg} />
          <div>
            <h3>Grilled Chicken Sandwich</h3>
            <p className="meal-item-price">$15.53</p>
            <p className="meal-item-description">
              Tender grilled chicken breast with avocado, bacon, lettuce, and
              honey mustard on a toasted bun.
            </p>
          </div>
          <p className="meal-item-actions">
            <button className="button undefined">Add to Cart</button>
          </p>
        </article>
      </li>
    </ul>
  );
}

export default Meals;
