import React from 'react';
import { LinkStyled } from './HeaderLink.styled';

export interface HeaderLinkProps {
  title: string;
  route: string;
}

function HeaderLink({ title, route }: HeaderLinkProps) {
  return <LinkStyled to={route}>{title}</LinkStyled>;
}

export default HeaderLink;
