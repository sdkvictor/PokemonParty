import colors from 'config/colors';
import styled from 'styled-components';

const handleColorType = (type: string) => {
  switch (type) {
    case 'fire':
      return `color: ${colors.white} ; background: ${colors.fire};`;
    case 'normal':
      return `color: ${colors.white} ; background: ${colors.normal};`;
    case 'water':
      return `color: ${colors.white} ; background: ${colors.water};`;
    case 'electric':
      return `color: ${colors.white} ; background: ${colors.electric};`;
    case 'grass':
      return `color: ${colors.white} ; background: ${colors.grass};`;
    case 'ice':
      return `color: ${colors.white} ; background: ${colors.ice};`;
    case 'fighting':
      return `color: ${colors.white} ; background: ${colors.fighting};`;
    case 'poison':
      return `color: ${colors.white} ; background: ${colors.poison};`;
    case 'ground':
      return `color: ${colors.white} ; background: ${colors.ground};`;
    case 'flying':
      return `color: ${colors.white} ; background: ${colors.flying};`;
    case 'psychic':
      return `color: ${colors.white} ; background: ${colors.psychic};`;
    case 'bug':
      return `color: ${colors.white} ; background: ${colors.bug};`;
    case 'rock':
      return `color: ${colors.white} ; background: ${colors.rock};`;
    case 'ghost':
      return `color: ${colors.white} ; background: ${colors.ghost};`;
    case 'dragon':
      return `color: ${colors.white} ; background: ${colors.dragon};`;
    case 'dark':
      return `color: ${colors.white} ; background: ${colors.dark};`;
    case 'steel':
      return `color: ${colors.white} ; background: ${colors.steel};`;
    case 'fairy':
      return `color: ${colors.white} ; background: ${colors.fairy};`;
    default:
      return 'color: #000; background: #eee;';
  }
};

export const TypeCard = styled.div<{ type: string }>`
  font-family: 'Flexo', sans-serif;
  font-size: 1.25rem;
  text-align: center;
  width: 8.625rem;
  border-radius: 0.313rem;
  padding: 0.1rem 0;
  margin: auto;

  // color: ${colors.white};
  // background-color: ${colors.ground};
  ${({ type }) => handleColorType(type)};
`;

export const CellStyled = styled.div<{ eff: number }>`
  font-family: 'Flexo', sans-serif;
  text-align: center;
  display: ${({ eff }) => (eff === 1 ? 'none' : 'block')};
  width: 3rem;
  margin: auto;
  background-color: ${({ eff }) => (eff > 1 ? 'green' : 'red')}; ;
`;
