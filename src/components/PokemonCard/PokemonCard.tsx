import React from 'react';
import {
  Box,
  Container,
  Content,
  Details,
  FieldName,
  FieldValue,
  LeftFields,
  Name,
  RightFields,
  SectionTitle,
  Sprite,
  TypeCard,
  TypeSection,
} from './PokemonCard.styled';

export interface PokemonCardProps {
  pokemon: Pokemon;
}

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

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Container>
      <Name>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Name>
      <Content>
        <Sprite src={pokemon.sprites.front_default} />
        <Details>
          <Box>
            <LeftFields>
              <FieldName>Height</FieldName>
              <FieldValue>{pokemon.height / 10} m</FieldValue>
              <FieldName>Weight</FieldName>
              <FieldValue>{pokemon.weight / 10} kg</FieldValue>
            </LeftFields>
            <RightFields>
              <FieldName>Abilities</FieldName>
              {pokemon.abilities.map((ability) => {
                return (
                  !ability.is_hidden && (
                    <FieldValue key={ability.ability.name}>
                      {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
                    </FieldValue>
                  )
                );
              })}
            </RightFields>
          </Box>
          <SectionTitle>Type</SectionTitle>
          <TypeSection>
            {pokemon.types.map((type: Types) => {
              return (
                <TypeCard key={type.slot} type={type.type.name}>
                  {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                </TypeCard>
              );
            })}
          </TypeSection>
        </Details>
      </Content>
    </Container>
  );
}

export default PokemonCard;
