import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import { serverUrl } from 'config/server';

interface Hero {
  id?: number;
  name: string;
  alterEgo: string;
}

const fetchSuperHeroes = (): Promise<Hero[]> => {
  return axios.get(`${serverUrl}/superheroes`).then((response) => response.data);
};

const addSuperHero = (hero: Hero) => {
  return axios.post(`${serverUrl}/superheroes`, hero);
};

export const useSuperHeroesData = (
  onSuccess: (data: Hero[]) => void,
  onError: (error: Error) => void
) => {
  return useQuery<Hero[], Error>('super-heroes', fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // enabled: false,
    onSuccess,
    onError,
  });
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
