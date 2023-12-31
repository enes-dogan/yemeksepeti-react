import { useState, useEffect } from 'react';
import { MealType } from '../types.ts';

async function fetchMeals() {
  const response = await fetch('http://localhost:3000/meals');
  const resData = await response.json();

  return resData;
}

export function useHttp(initialData: MealType[] | [] = []) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ message: '' });
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    async function fetchFn() {
      setIsFetching(true);
      try {
        const data = await fetchMeals();
        setFetchedData(data);
      } catch (error) {
        console.error(error);
        setError({
          message: 'Error occured, please try again later.',
        });
      }
      setIsFetching(false);
    }

    void fetchFn();
  }, []);

  return { isFetching, error, setError, fetchedData, setFetchedData };
}
