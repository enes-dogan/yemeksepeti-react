import useHttp from '../hooks/useHttp.ts';
import { configType } from '../types.ts';

import MealItem from './MealItem.tsx';
import Error from './Error.tsx';

const reqConfig: configType = {
  method: 'GET',
};

function Meals() {
  const {
    fetchedData: meals,
    isFetching,
    error,
  } = useHttp('http://localhost:3000/meals', reqConfig);

  if (isFetching) {
    return <p className="center">Loading meals...</p>;
  }

  if (error.message !== '') {
    return <Error title="Failed to Load Meals" message={error.message} />;
  }

  return (
    <ul id="meals">
      {!isFetching &&
        error.message == '' &&
        meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}

export default Meals;
