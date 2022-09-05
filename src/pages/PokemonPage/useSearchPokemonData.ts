import axios from 'axios';
import { localServer, serverUrl } from 'config/server';
import { useMutation, useQuery } from 'react-query';

interface Pokemon {
  species?: Species;
  name: string;
  sprites: Sprites;
  types: Array<Types>;
  weight: number;
  height: number;
  abilities: Array<Abilities>;
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

const fetchSearchPokemon = (pokemon: string): Promise<Pokemon> => {
  return axios.get(`${serverUrl}/pokemon/${pokemon}`).then((response) => response.data);
};

const addPokemon = (pokemon: Pokemon): Promise<Pokemon> => {
  return axios.post(`${localServer}/party`, pokemon);
};

export const useSearchPokemonData = (
  onSuccess: (data: Pokemon) => void,
  onError: (error: Error) => void,
  pokemonName: string
) => {
  return useQuery<Pokemon, Error>(
    ['searchPokemon', pokemonName],
    () => fetchSearchPokemon(pokemonName),
    {
      // cacheTime: 5000,
      // staleTime: 30000,
      enabled: Boolean(pokemonName),
      onSuccess,
      onError,
    }
  );
};

export const useAddPokemon = (
  onSuccess: (data: Pokemon) => void,
  onError: (error: Error) => void
) => {
  return useMutation(['addPokemon'], addPokemon, {
    onSuccess,
    onError,
  });
};

// export const useAddPokemon = () => {
//   return useMutation(addPokemon);
// };

// interface SearchList {
//   count: number;
//   next: string;
//   previous: string;
//   results: Array<Pokemon>;
// }

// const fetchSearchList = (): Promise<SearchList> => {
//   return axios.get(`${serverUrl}/pokemon/?offset=0&lim  it=1154`).then((response) => response.data);
// };

// export const useSearchPokemonData = (
//   onSuccess: (data: Pokemon) => void,
//   onError: (error: Error) => void,
//   pokemonName: string
// ) => {
//   return useQuery<Pokemon, Error>(
//     ['searchPokemon', pokemonName],
//     () => fetchSearchPokemon(pokemonName),
//     {
//       // cacheTime: 5000,
//       // staleTime: 30000,
//       enabled: false,
//       onSuccess,
//       onError,
//     }
//   );
// };
