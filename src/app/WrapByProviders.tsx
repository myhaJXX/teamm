import Footer from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import ProviderTheme from '@/components/ProviderTheme/ProviderTheme';
import ReduxProvider from '@/store/ReduxProvider';
import React, { FC, PropsWithChildren } from 'react';

export const WrapByProviders: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <>
      <ReduxProvider>
        <ProviderTheme>
          <Header />
          {children}
          <Footer />
        </ProviderTheme>
      </ReduxProvider>
    </>
  );
};
