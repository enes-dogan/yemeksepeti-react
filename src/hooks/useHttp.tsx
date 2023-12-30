import { useEffect } from 'react';

export async function fetchMeals(url = 'meals') {
  const response = await fetch('http://localhost:3000/' + url);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return resData.meals;
}

export function useHttp(fetchParam) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ message: '' });
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    async function fetchFn() {
      setIsFetching(true);
      try {
        const data = await fetchMeals(fetchParam);
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
  }, [fetchParam]);

  return { isFetching, error, setError, fetchedData, setFetchedData };
}
