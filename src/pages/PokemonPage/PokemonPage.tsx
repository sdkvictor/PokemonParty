import PokemonCard from 'components/PokemonCard';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useNavigate from 'utils/hooks/useNavigate';
import { AddButton, Container, InputStyled, SearchButton, SearchInput } from './PokemonPage.styled';
import { useAddPokemon, useSearchPokemonData } from './useSearchPokemonData';

function PokemonPage() {
  const { navigate } = useNavigate();

  const [searchPokemonName, setSearchPokemonName] = useState('');

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSuccess = (data: any) => {
    console.log('Success!', data);
  };
  const onError = (error: Error) => {
    console.log('Error: ', error);
  };

  const onAddSuccess = () => {
    navigate('/party');
  };

  const {
    data: selectedPokemon,
    refetch,
    isLoading,
  } = useSearchPokemonData(onSuccess, onError, searchPokemonName);

  const { mutate: addPokemon } = useAddPokemon(onAddSuccess, onError);

  const handleSearch = (data: any) => {
    setSearchPokemonName(data.pokemonName);
    console.log(searchPokemonName);
    refetch();
  };

  const handleAddPokemon = () => {
    if (selectedPokemon) {
      const pokemon = {
        name: selectedPokemon.name,
        species: selectedPokemon.species,
        sprites: { front_default: selectedPokemon.sprites.front_default },
        types: selectedPokemon.types,
        height: selectedPokemon.height,
        weight: selectedPokemon.weight,
        abilities: selectedPokemon.abilities,
      };
      console.log(pokemon);
      addPokemon(pokemon);
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSearch)}>
        <SearchInput>
          <InputStyled
            placeholder="Enter pokemon name"
            type="text"
            {...register('pokemonName', { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <SearchButton type="submit">Search</SearchButton>
        </SearchInput>
      </form>
      {selectedPokemon && selectedPokemon.species && (
        <div>
          <PokemonCard pokemon={selectedPokemon} />
          <AddButton onClick={handleAddPokemon}>Add to party</AddButton>
        </div>
      )}
    </Container>
  );
}

export default PokemonPage;
