import DefensiveCoverageTable from 'components/DefensiveCoverage';
import PokemonCard from 'components/PokemonCard';
import React from 'react';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import useNavigate from 'utils/hooks/useNavigate';

import {
  AccordionBodyStyled,
  AccordionHeaderStyled,
  AccordionStyled,
  AccordionWrapper,
  Container,
  PlusButton,
  Title,
} from './PartyPage.styled';
import { usePartyData, useRemovePokemon } from './usePartyData';

function PartyPage() {
  const { onClickNavigate } = useNavigate();

  const onSuccess = (data: any) => {
    console.log('Success!', data);
  };
  const onError = (error: Error) => {
    console.log('Error: ', error);
  };

  const { data: party, isLoading } = usePartyData(onSuccess, onError);

  const { mutate: removePokemon } = useRemovePokemon(onError);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Title>My Party</Title>
      <AccordionWrapper>
        <AccordionStyled defaultActiveKey={[]} alwaysOpen>
          {party?.map((pokemon, index) => {
            return (
              <Accordion.Item key={pokemon.id} eventKey={`${index}`}>
                <AccordionHeaderStyled type={pokemon.types[0].type.name}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  <PokemonCard pokemon={pokemon} />
                  <Button variant="danger" onClick={() => removePokemon(pokemon.id)}>
                    Remove from party
                  </Button>
                </AccordionBodyStyled>
              </Accordion.Item>
            );
          })}
        </AccordionStyled>
      </AccordionWrapper>
      {party && party.length < 6 && (
        <PlusButton onClick={onClickNavigate('/pokemon')}>+</PlusButton>
      )}
      {party && <DefensiveCoverageTable party={party} />}
    </Container>
  );
}

export default PartyPage;
