import axios from 'axios';
import { serverUrl } from 'config/server';
import { useQuery } from 'react-query';

interface Type {
  name: string;
  url: string;
}
const fetchTypes = (): Promise<Type[]> => {
  return axios.get(`${serverUrl}/type`).then((response) => response.data.results.slice(0, 18));
};

export const useTypesData = (
  onSuccess: (data: Type[]) => void,
  onError: (error: Error) => void
) => {
  return useQuery<Type[], Error>('types', fetchTypes, {
    // cacheTime: 5000,
    // staleTime: 30000,
    enabled: true,
    onSuccess,
    onError,
  });
};
