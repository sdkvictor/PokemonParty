import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'container ',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Flexo', sans-serif;
  margin-top: 4rem;
`;

export const AddButton = styled(Button)`
  width: 100%;
  font-family: 'Flexo', sans-serif;
  font-size: 1.2rem;
`;

export const SearchInput = styled.div`
  display: flex;
`;

export const InputStyled = styled.input`
  width: 20rem;
  margin-right: 0.2rem;
  font-family: 'Flexo', sans-serif;
  font-size: 1.2rem;
`;
export const SearchButton = styled(Button)`
  font-family: 'Flexo', sans-serif;
  font-size: 1.2rem;
`;
