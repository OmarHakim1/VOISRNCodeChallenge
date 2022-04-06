import {useEffect, useState, useCallback} from 'react';
import {Article} from '../models/Article';
import {fetchNewsListAPI} from '../servcie/AxiosService';

export function useGetNews() {
  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const getData = useCallback(async function () {
    setLoading(true);
    try {
      const response = (await fetchNewsListAPI()).data;
      setData([]);
      setData(oldArray => [...oldArray, ...response.articles]);
      console.log('TEST_DATA', data);
    } catch (err) {
      setData([]);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  function refetch() {
    getData();
  }

  return [data, loading, error, refetch];
}
