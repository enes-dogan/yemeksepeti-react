import useHttp from '../hooks/useHttp.ts';

import MealItem from './MealItem.tsx';

const reqConfig: { method: 'GET' } = {
  method: 'GET',
};

function Meals() {
  const { fetchedData: meals, isFetching } = useHttp('meals', reqConfig);

  if (isFetching) {
    return <p className="center">Loading Meals..</p>;
  }

  return (
    <ul id="meals">
      {!isFetching && meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}

export default Meals;
