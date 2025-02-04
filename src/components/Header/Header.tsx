'use client';
import React from 'react';
import { StyledHeader } from './styled';
import HeaderNav from '../HeaderNav/HeaderNav';
import { Logo } from '../Logo/Logo';
import RegLog from '../RegLog/RegLog';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderNav />
      <RegLog />
    </StyledHeader>
  );
};
