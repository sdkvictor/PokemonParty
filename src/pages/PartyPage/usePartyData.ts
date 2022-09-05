import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { localServer } from 'config/server';

interface Pokemon {
  species?: Species;
  name: string;
  sprites: Sprites;
  types: Array<Types>;
  weight: number;
  height: number;
  abilities: Array<Abilities>;
  id: number;
}

interface Abilities {
  ability: Ability;
  is_hidden: boolean;
}

interface Ability {
  name: string;
  url: string;
}

interface Types {
  slot: number;
  type: Type;
}

interface Type {
  name: string;
  url: string;
}

interface Sprites {
  front_default: string;
}

interface Species {
  name: string;
  url: string;
}

const fetchParty = (): Promise<any[]> => {
  return axios.get(`${localServer}/party`).then((response) => response.data);
};

const removePokemon = (id: number): Promise<Pokemon> => {
  return axios.delete(`${localServer}/party/${id}`);
};

export const usePartyData = (
  onSuccess: (data: Array<Pokemon>) => void,
  onError: (error: Error) => void
) => {
  return useQuery<Array<Pokemon>, Error>('party', fetchParty, {
    // cacheTime: 5000,
    // staleTime: 30000,
    enabled: true,
    onSuccess,
    onError,
  });
};

export const useRemovePokemon = (onError: (error: Error) => void) => {
  const queryClient = useQueryClient();
  return useMutation(['removePokemon'], removePokemon, {
    onSuccess: () => {
      queryClient.invalidateQueries('party');
    },
    onError,
  });
};
