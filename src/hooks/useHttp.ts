import { useState, useEffect, useCallback } from 'react';
import { MealType, configType, useHttpHookFn } from '../types.ts';

async function sendHttpRequest(url: 'meals' | 'orders', config: configType) {
  const response = await fetch(`http://localhost:3000/${url}`, config);

  const resData = await response.json();

  if (!response.ok) {
    new Error(resData.message || 'Something went wrong.');
  }

  return resData;
}

export const useHttp: useHttpHookFn = (url, config) => {
  const [fetchedData, setFetchedData] = useState<MealType[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(async () => {
    setIsFetching(true);
    try {
      const resData = await sendHttpRequest(url, config);

      setFetchedData(resData);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message || 'Something went wrong.');
    }
    setIsFetching(false);
  }, [url, config]);

  useEffect(() => {
    if (config && config.method === 'GET') {
      sendRequest();
    }
  }, [sendRequest, config]);

  return { isFetching, error, fetchedData, sendRequest };
};

export default useHttp;
