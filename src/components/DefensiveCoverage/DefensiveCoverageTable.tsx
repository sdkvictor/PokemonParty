import React from 'react';
import { Table } from 'react-bootstrap';
import { matchupTypes } from 'utils/data/matchups';
import { CellStyled, TypeCard } from './DefensiveCoverageTable.styled';
import { useTypesData } from './useTypesData';

export interface DefensiveCoverageTableProps {
  party: Array<any>;
}

function DefensiveCoverageTable({ party }: DefensiveCoverageTableProps) {
  const onSuccess = (data: any) => {
    console.log('Success!', data);
  };
  const onError = (error: Error) => {
    console.log('Error: ', error);
  };

  const { data: types, isLoading } = useTypesData(onSuccess, onError);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Defensive Coverage</th>
        </tr>
        <tr>
          <th>Move</th>
          {party.map((pokemon) => (
            <th>
              <img src={pokemon.sprites.front_default} alt="sprite" />
              <div>{pokemon.name}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {types?.map((type) => (
          <tr>
            <td>
              <TypeCard key={type.name} type={type.name}>
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </TypeCard>
            </td>
            {party.map((pokemon) => (
              <td>
                <CellStyled
                  eff={matchupTypes(
                    pokemon.types.map((t: any) => t.type),
                    type
                  )}
                >
                  {{
                    4: '4',
                    2: '2',
                    0: '0',
                    0.5: '1/2',
                    0.25: '1/4',
                  }[
                    matchupTypes(
                      pokemon.types.map((t: any) => t.type),
                      type
                    )
                  ] || '?'}
                </CellStyled>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DefensiveCoverageTable;
