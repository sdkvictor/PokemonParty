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

export const Container = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.div`
  font-size: 2rem;
  font-family: 'Flexo', sans-serif;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
export const Sprite = styled.img`
  width: 20rem;
  border-radius: 0.625rem;
  // border: solid 0.5rem ${colors.black};
  background-color: ${colors.lightGray};
`;

export const TypeCard = styled.div<{ type: string }>`
  font-size: 1.25rem;
  text-align: center;
  width: 8.625rem;
  border-radius: 0.313rem;
  padding: 0.1rem 0;
  margin: 1rem;
  margin-left: 0;
  // color: ${colors.white};
  // background-color: ${colors.ground};
  ${({ type }) => handleColorType(type)};
`;

export const Details = styled.div`
  margin-left: 1rem;
`;

export const Box = styled.div`
  display: flex;
  border-radius: 0.625rem;
  background-color: ${colors.blue};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Flexo', sans-serif;

  // align-items: center;
`;
export const FieldName = styled.div`
  font-size: 1.25rem;
  padding: 0.2rem;

  color: ${colors.white};
`;
export const FieldValue = styled.div`
  font-size: 1.25rem;
  padding: 0.2rem;
`;

export const LeftFields = styled.div`
  padding: 1rem;
`;
export const RightFields = styled.div`
  padding: 1rem 4rem;
`;

export const SectionTitle = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
`;
export const TypeSection = styled.div`
  display: flex;
`;
