import { useState, useEffect, useCallback } from 'react';
import {
  MealType,
  urlType,
  configType,
  useHttpHookFn,
  SendRequestData,
} from '../types.ts';

async function sendHttpRequest(url: urlType, config: configType) {
  let response;

  if (config.method === 'POST') {
    response = await fetch(url, {
      ...config,
      body: JSON.stringify(config.body),
    });
  } else {
    response = await fetch(url, config);
  }

  const resData = await response.json();

  if (!response.ok) {
    new Error(resData.message || 'Something went wrong.');
  }

  return resData;
}

export const useHttp: useHttpHookFn = (url, config) => {
  const [fetchedData, setFetchedData] = useState<MealType[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ message: '' });

  const sendRequest = useCallback(
    async (data?: SendRequestData) => {
      setIsFetching(true);
      try {
        let resData;
        if (data && config.method === 'POST') {
          resData = await sendHttpRequest(url, { ...config, body: data });
        } else {
          resData = await sendHttpRequest(url, config);
        }

        setFetchedData(resData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError({ message: error.message || 'Something went wrong.' });
      }
      setIsFetching(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && config.method === 'GET') {
      sendRequest();
    }
  }, [sendRequest, config]);

  return { isFetching, error, fetchedData, sendRequest };
};

export default useHttp;
