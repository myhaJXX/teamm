'use client';
import React, { FC, PropsWithChildren, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../ui/GlobalStyles';
import { constDefaultStyles } from '@/constants/constStyles';

const ProviderTheme: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [theme, _setTheme] = useState({ ...constDefaultStyles });

  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default ProviderTheme;
