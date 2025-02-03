'use client';
import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const ReduxProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
