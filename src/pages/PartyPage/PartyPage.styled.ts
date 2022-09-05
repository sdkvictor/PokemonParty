import colors from 'config/colors';
import { Accordion, Button } from 'react-bootstrap';
// import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import styled from 'styled-components';

const handleColorType = (type: string) => {
  switch (type) {
    case 'fire':
      return colors.fire;
    case 'normal':
      return colors.normal;
    case 'water':
      return colors.water;
    case 'electric':
      return colors.electric;
    case 'grass':
      return colors.grass;
    case 'ice':
      return colors.ice;
    case 'fighting':
      return colors.fighting;
    case 'poison':
      return colors.poison;
    case 'ground':
      return colors.ground;
    case 'flying':
      return colors.flying;
    case 'psychic':
      return colors.psychic;
    case 'bug':
      return colors.bug;
    case 'rock':
      return colors.rock;
    case 'ghost':
      return colors.ghost;
    case 'dragon':
      return colors.dragon;
    case 'dark':
      return colors.dark;
    case 'steel':
      return colors.steel;
    case 'fairy':
      return colors.fairy;
    default:
      return colors.lightGray;
  }
};

export const Container = styled.div.attrs({
  className: 'container ',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const AccordionWrapper = styled.div`
  width: 50rem;
`;

export const Title = styled.div`
  font-family: 'Flexo', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
`;

export const AccordionHeaderStyled = styled(Accordion.Header)<{ type: string }>`
  .accordion-button {
    font-family: 'Flexo', sans-serif;

    color: ${colors.white};
    background-color: ${({ type }) => handleColorType(type)} !important;
  }

  .accordion-button:focus {
    box-shadow: none;
  }
`;

export const AccordionStyled = styled(Accordion)<{ toggle: any; type: string }>`
  --bs-accordion-bg: ${colors.white};
  --bs-accordion-active-color: ${colors.black};
  --bs-accordion-btn-color: ${colors.black};
  font-family: 'Greycliff CF', sans-serif;
  line-height: 1.375rem;
  font-weight: 400;
  font-size: 1rem;
  --bs-accordion-btn-focus-border: none;
  --bs-accordion-btn-focus-border-color: ${colors.black};
  button {
    font-family: 'Greycliff CF', sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.875rem;
  }
  @media screen and (max-width: 990px) {
    font-family: 'Greycliff CF', sans-serif;
    line-height: 1.3rem;
    font-weight: 400;
    font-size: 0.875rem;
    button {
      font-family: 'Greycliff CF', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.375rem;
    }
  }
`;

export const AccordionBodyStyled = styled(Accordion.Body)`
  white-space: pre-line;
  display: flex;
  flex-direction: column;
`;

export const PlusButton = styled(Button)`
  width: 100%;
  max-width: 50rem;
  // background-color: ${colors.yellow};
  // border-color: ${colors.yellow};
  // color: ${colors.black};
  margin-top: 1rem;
`;

export const Pokemon = styled.div<{ selected?: boolean }>`
  width: 50rem;
  padding: 1rem;
  color: ${({ selected }) => (selected ? colors.black : colors.black)};
  background-color: ${({ selected }) => (selected ? colors.yellow : colors.lightGray)};
  font-size: 1.3rem;
  margin: 1rem 0;
  border-radius: 1rem;
  text-align: center;
`;
