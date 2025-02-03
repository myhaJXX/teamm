'use client';
import { useAppDispatch } from '@/hooks/useTypedRedux';
import { profileRequest } from '@/store/reducers/profileSlice';
import React from 'react';

const Comp = () => {
  const dis = useAppDispatch();
  return (
    <div
      onClick={() =>
        dis(
          profileRequest({
            actionButton: 'register',
            tg: '@mjxxx',
            login: 'serggg',
            password: '1258',
          })
        )
      }
    >
      register
    </div>
  );
};

export default Comp;
