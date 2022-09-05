import colors from 'config/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  :hover {
    color: ${colors.lightGray};
  }
`;
